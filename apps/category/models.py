from django.db import models


class Category(models.Model):

    class Meta:
        verbose_name = 'Categoría'
        verbose_name_plural = 'Categorías'

    
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name