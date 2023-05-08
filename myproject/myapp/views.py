from django.shortcuts import render
from myapp.models import JobListing

def job_list(request):
    jobs = JobListing.objects.all()
    return render(request, 'job_list.html', {'jobs': jobs})
