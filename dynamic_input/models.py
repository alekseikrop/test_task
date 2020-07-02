from django.db import models
from django.contrib.postgres.fields import JSONField


class InputResult(models.Model):

    result = JSONField()
