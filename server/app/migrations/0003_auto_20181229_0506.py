# Generated by Django 2.1.4 on 2018-12-29 05:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20181229_0402'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='createdBy',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='updatedAt',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='updatedBy',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='shoot',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='shoot',
            name='createdBy',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='shoot',
            name='updatedAt',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='shoot',
            name='updatedBy',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='createdBy',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='updatedAt',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='updatedBy',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
