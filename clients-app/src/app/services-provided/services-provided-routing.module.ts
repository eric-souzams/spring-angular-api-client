import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceProvidedFormComponent } from './service-provided-form/service-provided-form.component';
import { ServiceProvidedListComponent } from './service-provided-list/service-provided-list.component';


const routes: Routes = [
  { path: 'services/form', component: ServiceProvidedFormComponent },
  { path: 'services/form/:id', component: ServiceProvidedFormComponent },
  { path: 'services/list', component: ServiceProvidedListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesProvidedRoutingModule { }
