# Generated by Django 4.1.7 on 2023-03-04 12:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_tasks'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasks',
            name='completed',
        ),
    ]
