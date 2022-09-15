from c3pAPP.models.asignacion_paciente import asignacion_paciente
from rest_framework import serializers

class asignacion_pacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = asignacion_paciente
        fields = ['id_asignacion_paciente', 'id_paciente', 'id_familiar', 'id_personal']