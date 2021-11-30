import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentsDetailsComponent } from './components/investments-details/investments-details.component';
import { InvestmentsListComponent } from './components/investments-list/investments-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'investments', pathMatch: 'full' },
  { path: 'investments', component: InvestmentsListComponent },
  { path: 'investments/:id', component: InvestmentsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
