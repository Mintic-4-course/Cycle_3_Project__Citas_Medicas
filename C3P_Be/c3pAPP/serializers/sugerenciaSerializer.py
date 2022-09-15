from c3pAPP.models.sugerencia import sugerencia
from rest_framework import serializers

class sugerenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = sugerencia
        fields = ['id', 'id_personal', 'id_historial_signos', 
                  'fecha_sugerencia', 'recomendacion_medica']