import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investment } from '../models/investment.model';

const baseUrl = 'http://localhost:8000/api/investments';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  constructor(private http: HttpClient) { }

  getAll(page, ville, etat_d_avancement){
    return this.http.get(baseUrl + `/?etat_d_avancement=${etat_d_avancement}` + `&page=${page}` + `&ville=${ville}`);
  }

  get(id): Observable<Investment> {
    return this.http.get<Investment>(`${baseUrl}/${id}`);
  }

}
