import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from './clients/clients';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  apiUrl: string = environment.apiURLBase + '/api/clients';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  update(client: Client): Observable<any> {
    return this.http.put<Client>(this.apiUrl + `/${client.id}`, client);
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<any>(this.apiUrl + `/${id}`);
  }

  delete(client: Client): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `/${client.id}`);
  }
}
