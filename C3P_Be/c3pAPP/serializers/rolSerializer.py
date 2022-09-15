from c3pAPP.models.rol import rol
from rest_framework import serializers

class rolSerializer(serializers.ModelSerializer):
    class Meta:
        model = rol
        fields = ['id_rol', 'nombre']