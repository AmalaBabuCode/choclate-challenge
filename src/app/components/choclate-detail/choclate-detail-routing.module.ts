import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoclateDetailComponent } from './choclate-detail/choclate-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ChoclateDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoclateDetailRoutingModule {}
