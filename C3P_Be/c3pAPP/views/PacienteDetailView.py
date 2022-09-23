from django.conf import settings
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.backends import TokenBackend

from c3pAPP.serializers.pacienteSerializer import pacienteSerializer 
from c3pAPP.models.paciente import paciente


class PacienteDetailView(generics.RetrieveAPIView):

    def get(self, request, *args, **kwargs):
        try:
            user = paciente.objects.get(id=kwargs['pk'])
            serializer = pacienteSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except paciente.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
