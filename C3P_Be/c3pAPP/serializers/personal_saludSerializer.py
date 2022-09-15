from c3pAPP.models.personal_salud import personal_salud
from rest_framework import serializers

class personal_saludSerializer(serializers.ModelSerializer):
    class Meta:
        model = personal_salud
        fields = ['id', 'id_usuario', 'id_rol']