from c3pAPP.models.familiar import familiar
from rest_framework import serializers

class familiarSerializer(serializers.ModelSerializer):
    class Meta:
        model = familiar
        fields = ['id_familiar', 'id_usuario', 'parentesco']