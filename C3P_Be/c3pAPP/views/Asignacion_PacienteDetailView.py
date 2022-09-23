from rest_framework import generics, status
from rest_framework.response import Response

from c3pAPP.serializers.asignacion_pacienteSerializer import GETasignacion_pacienteSerializer
from c3pAPP.models.asignacion_paciente import asignacion_paciente


# get asignacion by id_paciente
class Asignacion_PacienteDetailView(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        try:
            user = asignacion_paciente.objects.get(id_paciente=kwargs["id_paciente"])
            serializer = GETasignacion_pacienteSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except asignacion_paciente.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
