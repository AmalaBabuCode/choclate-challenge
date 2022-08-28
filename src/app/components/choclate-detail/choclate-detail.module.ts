import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoclateDetailRoutingModule } from './choclate-detail-routing.module';
import { NutritionChartComponent } from './nutrition-chart/nutrition-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { EditChoclateDetailsComponent } from './edit-choclate-details/edit-choclate-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ChoclateDetailRoutingModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [EditChoclateDetailsComponent]
})
export class ChoclateDetailModule {}
