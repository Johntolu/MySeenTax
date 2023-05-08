import csv
from bs4 import BeautifulSoup
import requests

# Specify the URL for the job listings page
base_url = 'https://www.disabledperson.com/jobs'
page_count = 0

# Create a CSV file and write the header row
with open('job_listings.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Title', 'Location', 'Company'])

    while True:
        page_count += 1
        url = f'{base_url}?page={page_count}'

        # Send a GET request to the URL
        response = requests.get(url)

        # Check if the request was successful
        if response.status_code == 200:
            # Create a BeautifulSoup object to parse the HTML content
            soup = BeautifulSoup(response.content, 'html.parser')

            # Find the job elements
            job_elements = soup.find_all('tr', class_='job')

            # Check if any job elements were found
            if job_elements:
                # Iterate over each job element
                for job_element in job_elements:
                    # Extract the job title
                    title_element = job_element.find('div', class_='title').find('a')
                    title = title_element.get_text(strip=True)

                    # Extract the location
                    location_element = job_element.find('div', class_='location-job').find('a')
                    location = location_element.get_text(strip=True)

                    # Extract the company name
                    company_element = job_element.find('span')
                    company = company_element.get_text(strip=True)

                    # Write the job details to the CSV file
                    writer.writerow([title, location, company])

            else:
                print('No job elements found on the page.')
                break  # Break the loop if no more job elements are found

        else:
            print('Failed to retrieve the page. Status code:', response.status_code)
            break  # Break the loop if the request was unsuccessful or encounters an error
