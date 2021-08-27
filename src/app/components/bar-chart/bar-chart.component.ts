import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() obj: any;
  @Input() chartLab: any | undefined;
  keys: any = undefined;
  values: any = undefined;

  public barChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
    scales: {
      xAxes: [
        {
          position: 'top',
          display: true,
          ticks: {
            suggestedMin: 0,
            fontColor: 'white',
          },
        },
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            fontColor: 'white',
            // min: 0,
            // max: 100,
            // stepSize: 20
          },
        },
      ],
    },
    plugins: {
      zoom: {
        zoom: {
          animation: {
            duration: 1000,
            easing: 'easeOutCubic'
          },
          enabled: true,
          mode: 'y',
        },
      },
    },
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  public barData = [
    {
      data: [],
      backgroundColor: '#1072B8',
      borderColor: '#0E609C',
      borderWidth: 1,
      label: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.keys = Object.keys(this.obj);
    this.values = Object.values(this.obj);
    this.barData[0].data = this.values;
    this.barData[0].label = this.chartLab;
  }
}
