import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoclateOverviewRoutingModule } from './choclate-overview-routing.module';
import { ChoclateOverviewComponent } from '../choclate-overview.component';

@NgModule({
  imports: [CommonModule, ChoclateOverviewRoutingModule],
})
export class ChoclateOverviewModule {}
