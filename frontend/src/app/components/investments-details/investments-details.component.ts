import { Component, OnInit, Input } from '@angular/core';
import { InvestmentsService } from 'src/app/services/investments.service';
import { Investment } from 'src/app/models/investment.model';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investments-details',
  templateUrl: './investments-details.component.html',
  styleUrls: ['./investments-details.component.css']
})
export class InvestmentsDetailsComponent implements OnInit {

  @Input() currentInvestment: Investment = {
      'id': '',
      'titreoperation': '',
      'entreprise': '',
      'annee_de_livraison': 0,
      'ville': '',
      'mandataire': '',
      'nombre_de_lots': 0,
      'ppi': '',
      'lycee': '',
      'notification_du_marche': moment(),
      'codeuai': '',
      'longitude': 0,
      'etat_d_avancement': '',
      'montant_des_ap_votes_en_meu': 0,
      'cao_attribution': moment(),
      'latitude': 0,
      'maitrise_d_oeuvre': '',
      'mode_de_devolution': '',
      'annee_d_individualisation': 0,
      'enveloppe_prev_en_meu': 0

  }

  constructor(
    private investmentsService: InvestmentsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getInvestment(this.route.snapshot.params["id"]);
  }

  getInvestment(id: string): void {
    this.investmentsService.get(id)
      .subscribe({
        next: (data) => {
          this.currentInvestment = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
