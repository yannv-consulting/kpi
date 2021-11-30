from django.db import models

# Create your models here.

class Investments(models.Model):
    titreoperation = models.TextField(blank=True, null=True)
    entreprise = models.CharField(max_length=50, blank=True, null=True)
    annee_de_livraison = models.IntegerField(blank=True, null=True)
    ville = models.CharField(max_length=50, blank=True, null=True)
    mandataire = models.CharField(max_length=50, blank=True, null=True)
    nombre_de_lots = models.IntegerField(blank=True, null=True)
    ppi = models.CharField(max_length=50, blank=True, null=True)
    lycee = models.CharField(max_length=50, blank=True, null=True)
    notification_du_marche = models.DateField(blank=True, null=True)
    codeuai = models.CharField(max_length=50, blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    etat_d_avancement = models.CharField(max_length=50, blank=True, null=True)
    montant_des_ap_votes_en_meu = models.FloatField(blank=True, null=True)
    cao_attribution = models.DateField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    maitrise_d_oeuvre = models.CharField(max_length=150, blank=True, null=True)
    mode_de_devolution = models.CharField(max_length=150, blank=True, null=True)
    annee_d_individualisation = models.IntegerField(blank=True, null=True)
    enveloppe_prev_en_meu = models.FloatField(blank=True, null=True)