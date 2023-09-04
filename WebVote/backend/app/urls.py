from django.urls import path
from .views import (
    LoginApi,
    RegisterApi,
    LogoutApi,
    CandidateListView,
    VoteResultsView,
    submit_vote,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('login/', LoginApi .as_view()),
    path('register/', RegisterApi.as_view()),
    path('logout/', LogoutApi.as_view()),
    path('candidate/', CandidateListView.as_view()),
    path('vote-results/', VoteResultsView.as_view()),
    path('submit-vote/', submit_vote),  # URL untuk submit vote
]

