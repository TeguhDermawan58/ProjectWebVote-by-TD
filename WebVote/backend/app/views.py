from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Candidate, Vote
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import UserSerializer, RegSerializer,CandidateSerializer
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt



class CandidateListView(APIView):
    serializer_class = CandidateSerializer
    
    def get(self, request):
        candidates = Candidate.objects.all()
        serializer = CandidateSerializer(candidates, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = CandidateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

@csrf_exempt
def submit_vote(request):
    if request.method == 'POST':
        candidate_id = request.POST.get('candidate_id')
        try:
            candidate = Candidate.objects.get(pk=candidate_id)
        except Candidate.DoesNotExist:
            return JsonResponse({'error': 'Candidate not found.'}, status=300)
        
        # Create or update a vote record
        vote, created = Vote.objects.get_or_create(candidate=candidate)
        vote.vote_count += 1
        vote.save()
        
        return JsonResponse({'message': 'Vote submitted successfully.'})
    return JsonResponse({'error': 'Invalid request method.'}, status=400)

class VoteResultsView(APIView):
    def get(self, request):
        candidates = Candidate.objects.all()
        results = []

        for candidate in candidates:
            try:
                vote = Vote.objects.get(candidate=candidate)
                results.append({
                    "id": candidate.id,
                    "name": candidate.name,
                    "voteCount": vote.vote_count,
                })
            except Vote.DoesNotExist:
                results.append({
                    "id": candidate.id,
                    "name": candidate.name,
                    "voteCount": 0,
                })

        return JsonResponse(results, safe=False)


# Create your views here.

class LoginApi(APIView):
    serializer_class = UserSerializer
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            # token, created = Token.objects.get_or_create(user=user)
            serializer = UserSerializer(user)
            return Response({ 'user': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid login credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class RegisterApi(APIView):
    serializer_class = RegSerializer
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            username = request.data.get('username')
            email = request.data.get('email')
            password = request.data.get('password')
            # hashed_password = make_password(password)
            myuser = User.objects.create_user(username,email, password)
            myuser.save()
            if myuser:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class LogoutApi(APIView):
    def post(self, request):
        logout(request)
        return Response( status=status.HTTP_200_OK)