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

  getAll(page){
    return this.http.get(baseUrl + `/?page=${page}` );
  }

  get(id): Observable<Investment> {
    return this.http.get<Investment>(`${baseUrl}/${id}`);
  }

  // create(data) {
  //   return this.http.post(baseUrl, data);
  // }

  // update(id, data) {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id) {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll() {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title) {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}
