from django.db import models

# Create your models here.
class Candidate(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    description = models.TextField()
    picture = models.ImageField(upload_to='candidates')

    def __str__(self):
        return "{}. {}".format(self.id, self.name)
    
class Vote(models.Model):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    voter_name = models.CharField(max_length=100)  # Nama pemilih
    timestamp = models.DateTimeField(auto_now_add=True)  # Waktu vote
    vote_count = models.PositiveIntegerField(default=0)  # Add this field

    def __str__(self):
        return f"Vote for {self.candidate.name} by {self.voter_name}"