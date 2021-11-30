import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from 'src/app/services/investments.service';
import { Investment } from 'src/app/models/investment.model';
import { PageEvent } from '@angular/material/paginator';
import { Input } from '@angular/core';

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
  @Input() ville = "";
  @Input() etat_d_avancement = "";
  displayedColumns: string[] = [
    'id',
    'titreoperation',
    'entreprise',
    'ville',
    'etat_d_avancement',
  ];

  constructor(private investmentsService: InvestmentsService) { }


  ngOnInit(): void {
    this.getInvestments(1);
  }

  getInvestments(page){
    this.investmentsService.getAll(page, this.ville, this.etat_d_avancement)
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
