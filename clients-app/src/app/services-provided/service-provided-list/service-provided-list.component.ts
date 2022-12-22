import { Component, OnInit } from '@angular/core';
import { ServiceProvidedService } from 'src/app/service-provided.service';
import { ServiceProvidedSearch } from './serviceProvidedSearch';

@Component({
  selector: 'app-service-provided-list',
  templateUrl: './service-provided-list.component.html',
  styleUrls: ['./service-provided-list.component.css']
})
export class ServiceProvidedListComponent implements OnInit {
  name: string;
  month: number;
  months: number[];
  services: ServiceProvidedSearch[];
  message: string;

  constructor(
    private service: ServiceProvidedService
  ) {
    this.months = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  search() {
    this.service
      .search(this.name, this.month)
      .subscribe(
        response => {
          this.services = response;
          if(this.services.length <= 0) {
            this.message = 'No records found.'
          } else {
            this.message = null;
          }
        }
      );
  }

}
