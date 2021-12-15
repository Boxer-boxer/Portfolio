# Generated by Django 3.1.4 on 2021-12-14 18:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_auto_20211213_1708'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='static/img/projects')),
                ('default', models.BooleanField(default=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='project',
            name='Images',
        ),
        migrations.DeleteModel(
            name='ProjectImage',
        ),
        migrations.AddField(
            model_name='image',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.project'),
        ),
    ]
