from rest_framework import serializers
from c3pAPP.models.paciente import paciente
from c3pAPP.serializers.usuarioSerializer import usuarioSerializerDetail

class pacienteSerializer(serializers.ModelSerializer):
    id_usuario = usuarioSerializerDetail()
    class Meta:
        model = paciente
        fields = ['id', 'id_usuario', 'fecha_nacimiento', 'eps',
                  'rh', 'coordenadas']