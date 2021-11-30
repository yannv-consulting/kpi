import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from 'src/app/services/investments.service';
import { Investment } from 'src/app/models/investment.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-investments-list',
  templateUrl: './investments-list.component.html',
  styleUrls: ['./investments-list.component.css']
})
export class InvestmentsListComponent implements OnInit {

  investments?: Investment[];
  data: any;
  page: number;
  length: number;
  pageIndex: number;
  pageSize = 10;
  displayedColumns: string[] = [
    'id',
    'titreoperation',
    'entreprise',
    // 'annee_de_livraison',
    'ville',
    // 'mandataire',
    // 'nombre_de_lots',
    // 'ppi',
    // 'lycee',
    // 'notification_du_marche',
    // 'codeuai',
    // 'longitude',
    'etat_d_avancement',
    // 'montant_des_ap_votes_en_meu',
    // 'cao_attribution',
    // 'latitude',
    // 'maitrise_d_oeuvre',
    // 'mode_de_devolution',
    // 'annee_d_individualisation',
    // 'enveloppe_prev_en_meu'
  ];

  constructor(private investmentsService: InvestmentsService) { }


  ngOnInit(): void {
    this.getInvestments(1);
  }

  getInvestments(page){
    this.investmentsService.getAll(page)
      .subscribe({
        next: (data) => {
          this.data = data;
          this.investments = this.data.results
          this.length = this.data.count
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  event(event?:PageEvent){
    console.log(event)
    if (event?.pageIndex != null){
      console.log('ff')
      this.getInvestments(event?.pageIndex + 1)
    }
  }


        


}
