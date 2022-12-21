import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientsService } from 'src/app/clients.service';
import { Client } from '../clients';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  selectedClient: Client;
  requestSuccess: string;
  requestError: string;

  constructor(
    private service: ClientsService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service
      .getClients()
      .subscribe(
        response => this.clients = response
      );
  }

  newRegister() {
    this.router.navigate([
      '/clients/form'
    ]);
  }

  handlerTrashIcon(client: Client) {
    this.selectedClient = client;
  }

  handlerDelete() {
    this.service
      .delete(this.selectedClient)
      .subscribe(
        response => { 
          this.requestSuccess = 'Client deleted with success!',
          this.ngOnInit();
        },
        error => this.requestError = 'Error when tried delete a client.'
      );
  }

}
