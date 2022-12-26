import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ServiceProvidedFormComponent } from './service-provided-form/service-provided-form.component';
import { ServiceProvidedListComponent } from './service-provided-list/service-provided-list.component';

const routes: Routes = [
  { path: 'services', component: LayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'form', component: ServiceProvidedFormComponent },
    { path: 'form/:id', component: ServiceProvidedFormComponent },
    { path: 'search', component: ServiceProvidedListComponent },
    { path: '', redirectTo: '/services/serach', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesProvidedRoutingModule { }
