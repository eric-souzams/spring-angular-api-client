import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { ClientsService } from 'src/app/clients.service';
import { Client } from '../clients';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {
  client: Client;
  requestSuccess: boolean = false;
  errors: string[];
  id: number;
  
  constructor(
    private service: ClientsService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.client = new Client;
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getClientById(this.id)
          .subscribe(
            response => this.client = response, 
            error => this.client = new Client);
      }
    });
  }

  onSubmit() {
    if (this.client.id) {
      this.handlerUpdateClient();
    } else {
      this.handlerSaveClient();
    }
  }

  handlerSaveClient() {
    this.service
      .save(this.client)
      .subscribe(response => {
        this.requestSuccess = true;
        this.errors = null;
        this.client = response;
      }, errorResponse => {
        this.requestSuccess = false;
        this.errors = errorResponse.error.errors;
      }
    );
  }

  handlerUpdateClient() {
    this.service
      .update(this.client)
      .subscribe(response => {
        this.requestSuccess = true;
        this.errors = null;
      }, errorResponse => {
        this.requestSuccess = false;
        this.errors = ['Error when trying to perform this operation.']
      }
    );
  }

  backList() {
    this.router.navigate([
      '/clients/list'
    ]);
  }

}
