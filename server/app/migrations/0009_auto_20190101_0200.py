# Generated by Django 2.1.4 on 2019-01-01 02:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_share'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='image',
            options={'ordering': ('updatedAt',)},
        ),
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='phone',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]