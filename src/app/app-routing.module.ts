import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(
        './components/choclate-overview/choclate-overview/choclate-overview.module'
      ).then((m) => m.ChoclateOverviewModule),
  },
  {
    path: 'choclate-detail/:id',
    loadChildren: () =>
      import('./components/choclate-detail/choclate-detail.module').then(
        (m) => m.ChoclateDetailModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
