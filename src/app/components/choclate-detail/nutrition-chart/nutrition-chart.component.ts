import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChoclateNutrition } from 'src/app/models/choclate/choclate.model';

@Component({
  selector: 'app-nutrition-chart',
  templateUrl: './nutrition-chart.component.html',
  styleUrls: ['./nutrition-chart.component.scss'],
})
export class NutritionChartComponent implements OnInit, OnChanges {
  @Input()
  nutritionData!: ChoclateNutrition;
  public pieChartLabels: string[] = ['Fat', 'Carbohydrates', 'Protein', 'Salt'];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartDatasets: {
    data: number[];
  }[] = [
    {
      data: []
    }
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setNutritionData(changes['nutritionData'].currentValue);
  }

  setNutritionData(nutritionData: ChoclateNutrition) {
    this.pieChartDatasets = [
      {
        data: [
          nutritionData.fat.total,
          nutritionData.carbohydrates.total,
          nutritionData.protein,
          nutritionData.salt,
        ],
      },
    ];
  }
}
