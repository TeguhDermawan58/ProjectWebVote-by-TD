from django.contrib import admin
from .models import Candidate,Vote
# Register your models here.

class AdminView(admin.ModelAdmin):
    readonly_fields = [
        'id',
    ]

class VoteAdmin(admin.ModelAdmin):
    readonly_fields = [
        'timestamp',
        'vote_count',
    ]

admin.site.register(Candidate,AdminView)
admin.site.register(Vote, VoteAdmin)