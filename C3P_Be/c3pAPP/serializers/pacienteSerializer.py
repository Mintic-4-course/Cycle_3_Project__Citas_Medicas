from c3pAPP.models.paciente import paciente
from rest_framework import serializers

class pacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = paciente
        fields = ['id', 'id_usuario', 'fecha_nacimiento', 'eps',
                  'rh', 'coordenadas']