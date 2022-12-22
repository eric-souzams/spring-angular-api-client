import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesProvidedRoutingModule } from './services-provided-routing.module';
import { ServiceProvidedFormComponent } from './service-provided-form/service-provided-form.component';
import { FormsModule } from '@angular/forms';
import { ServiceProvidedListComponent } from './service-provided-list/service-provided-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServiceProvidedFormComponent,
    ServiceProvidedListComponent
  ],
  imports: [
    CommonModule,
    ServicesProvidedRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ServiceProvidedFormComponent,
    ServiceProvidedListComponent
  ]
})
export class ServicesProvidedModule { }
