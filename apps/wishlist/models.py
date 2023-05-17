from django.db import models
from django.conf import settings
from apps.product.models import Product

User = settings.AUTH_USER_MODEL


class Wishlist(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total_items = models.IntegerField(default=0)


class WishlistItem(models.Model):

    wishlist = models.ForeignKey(Wishlist, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
