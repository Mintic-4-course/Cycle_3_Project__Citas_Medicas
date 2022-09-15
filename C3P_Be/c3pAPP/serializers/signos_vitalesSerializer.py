from c3pAPP.models.signos_vitales import signos_vitales
from rest_framework import serializers

class signos_vitalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = signos_vitales
        fields = ['id_signos_vitales', 'presion_sistolica', 'presion_diastolica', 
                  'frecuencia_respiratoria', 'glicemia', 'oximetria', 'temperatura', 
                  'frecuencia_cardiaca']