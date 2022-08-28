import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoclateOverviewComponent } from '../choclate-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ChoclateOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoclateOverviewRoutingModule {}
