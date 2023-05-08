from fastapi import FastAPI
import csv

app = FastAPI()

@app.get("/")
def get_job_postings():
    job_listings = []
    
    # Read the CSV file
    with open('job_listings.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            job_listings.append(row)
    
    return job_listings
