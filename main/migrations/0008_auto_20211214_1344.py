# Generated by Django 3.1.4 on 2021-12-14 18:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_auto_20211214_1339'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='default',
            new_name='thumbnail',
        ),
    ]
