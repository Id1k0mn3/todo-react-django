from django.contrib import admin
from .models import Todo
# Register your models here.
class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
# add our models to admin interface.
admin.site.register(Todo, TodoAdmin)
