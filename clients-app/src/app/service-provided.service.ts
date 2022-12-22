import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceProvided } from './services-provided/serviceProvided';
import { environment } from '../environments/environment';
import { ServiceProvidedSearch } from './services-provided/service-provided-list/serviceProvidedSearch';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {
  apiUrl: string = environment.apiURLBase + '/api/services';

  constructor(
    private http: HttpClient
  ) {}

  save(serviceProvided: ServiceProvided): Observable<ServiceProvided> {
    return this.http.post<ServiceProvided>(this.apiUrl, serviceProvided);
  }

  update(serviceProvided: ServiceProvided): Observable<ServiceProvided> {
    return this.http.put<ServiceProvided>(this.apiUrl, serviceProvided);
  }

  search(name: string, month: number): Observable<ServiceProvidedSearch[]> {
    const params = new HttpParams()
                      .set("name", name)
                      .set("month", month ? month.toString() : '');
  
    const url = this.apiUrl + "/search?" + params.toString();

    return this.http.get<any>(url);
  }
}
