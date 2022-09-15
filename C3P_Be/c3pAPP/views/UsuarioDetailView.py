from django.conf import settings
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.backends import TokenBackend

from c3pAPP.serializers.usuarioSerializer import usuarioSerializer
from c3pAPP.models.usuario import User

class UsuarioDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = usuarioSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        token = request.META.get('HTTP_AUTHORIZATION')
        tokenBackend = TokenBackend(algorithm=settings.SIMPLE_JWT['ALGORITHM'])
        valid_data = tokenBackend.decode(token, verify=False)

        if valid_data['user_id'] == int(kwargs['pk']):
            stringResponse = {'message': 'Unauthorized'}
            return super().get(request, *args, **kwargs)
        return super().get(request, *args, **kwargs)