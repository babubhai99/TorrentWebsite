from django.http.response import Http404, HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from py1337x import py1337x
import json

# Create your views here.
@api_view(['GET'])
def categories(request):
    info = {
        'categories': [
                'movies',
                'tv',
                'games',
                'music',
                'apps',
                'anime',
                'documentaries',
                'xxx',
                'others',
            ]
    }
    return Response(info)

@api_view(['GET'])
def trending(request):
    torrents = py1337x()
    info1 = torrents.trending(week=True)
    return Response(info1)

@api_view(['GET'])
def index(request, movie):
    torrents = py1337x()
    info = torrents.search(f'{movie}')
    return Response(info)

@api_view(['GET'])
def information(request, movie, link):
    torrents = py1337x()
    info1 = torrents.info(torrentId = f'{link}')
    return Response(info1)

@api_view(['GET'])
def cat_sort(request, movie):
    torrents = py1337x()
    info1 = torrents.trending()
    return Response(info1)