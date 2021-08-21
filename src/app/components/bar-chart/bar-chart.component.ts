import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() seasonCount: any;
  @Input() chartLab: any | undefined;
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

  public barData = [{ data: [], label: '' }];

  constructor() {}

  ngOnInit(): void {
    this.keys = Object.keys(this.seasonCount);
    this.values = Object.values(this.seasonCount);
    this.barData[0].data = this.values;
    this.barData[0].label = this.chartLab;
  }
}
