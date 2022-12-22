import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from 'src/app/clients/clients';
import { ServiceProvidedService } from 'src/app/service-provided.service';
import { ServiceProvided } from '../serviceProvided';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {
  clients: Client[] = [];
  serviceProvided: ServiceProvided;
  requestSuccess: boolean = false;
  errors: string[];
  id: number;

  constructor(
    private clientService: ClientsService,
    private serviceProvidedService: ServiceProvidedService
  ) {
    this.serviceProvided = new ServiceProvided();
  }

  ngOnInit(): void {
    this.clientService
      .getClients()
      .subscribe(response => this.clients = response);
  }

  onSubmit() {
    if(this.id) {
      this.handlerUpdateProvider();
    } else {
      this.handlerSaveProvider();
    }
  }

  handlerSaveProvider() {
    this.serviceProvidedService
      .save(this.serviceProvided)
      .subscribe(
        response => {
          this.requestSuccess = true;
          this.errors = null;
          this.serviceProvided = new ServiceProvided();
        },
        errorResponse => {
          this.requestSuccess = false;
          this.errors = errorResponse.error.errors;
        }
      );
  }

  handlerUpdateProvider() {
    this.serviceProvidedService
    .update(this.serviceProvided)
    .subscribe(response => {
      this.requestSuccess = true;
      this.errors = null;
    }, errorResponse => {
      this.requestSuccess = false;
      this.errors = ['Error when trying to perform this operation.']
    }
  );
  }

}
