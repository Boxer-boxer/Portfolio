# Generated by Django 3.1.4 on 2021-12-16 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_auto_20211214_1505'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to='./../var/static_root/img/projects'),
        ),
    ]
