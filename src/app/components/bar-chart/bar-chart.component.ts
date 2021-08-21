import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() seasonCount: any;
  keys: any = undefined;
  values: any = undefined;

  public barChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMin: 0,
          },
        },
      ],
    },
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  public barData = [{ data: [], label: 'Quantidade de Episódios' }];

  constructor() {}

  ngOnInit(): void {
    this.keys = Object.keys(this.seasonCount);
    this.values = Object.values(this.seasonCount);
    this.barData[0].data = this.values;
  }
}
