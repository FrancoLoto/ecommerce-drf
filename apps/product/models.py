from django.db import models
from django.conf import settings
from datetime import datetime
from apps.category.models import Category

domain = settings.DOMAIN

class Product(models.Model):

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='photos/%Y/%m/')
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    compare_price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=datetime.now)

    def get_thumbnail(self):
        if self.photo:
            return domain + self.photo.url
        return ''

    def __str__(self):
        return self.name
    


