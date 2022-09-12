from django.db import models
from .usuario import User

class paciente(models.Model):
    id_paciente = models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    fecha_nacimiento = models.DateField(verbose_name='Fecha de Nacimiento')
    eps = models.CharField('eps', max_length = 50)
    rh = models.CharField('rh', max_length = 10)
    coordenadas = models.CharField('Coordenadas', max_length = 50)