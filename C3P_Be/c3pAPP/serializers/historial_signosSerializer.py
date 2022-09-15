from c3pAPP.models.historial_signos import historial_signos
from rest_framework import serializers

class historial_signosSerializer(serializers.ModelSerializer):
    class Meta:
        model = historial_signos
        fields = ['id_historial_signos', 'id_paciente', 'id_familiar', 'id_signos_vitales',
                  'fecha_historial', 'observaciones']