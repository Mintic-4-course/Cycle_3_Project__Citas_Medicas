from django.db import models

class rol(models.Model):
    id_rol = models.AutoField(primary_key=True)
    nombre = models.CharField('Rol', max_length = 50)