# Generated by Django 3.2.9 on 2021-11-29 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('investments', '0002_auto_20211129_1042'),
    ]

    operations = [
        migrations.AlterField(
            model_name='investements',
            name='etat_d_avancement',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
