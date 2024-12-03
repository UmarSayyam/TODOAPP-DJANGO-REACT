from django.db import models

class Todo(models.Model):
    body = models.CharField(max_length=300)
    completed = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.body
