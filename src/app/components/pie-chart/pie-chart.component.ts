import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() obj: any;

  keys: any = undefined;
  values: any = undefined;

  public pieChartOptions = {
    responsive: true,
    scales: {},
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
    plugins: {},
  };

  public pieData = [
    {
      data: [],
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1,
      backgroundColor: ['#1770B5', '#FF8306', '#760E37', '#422956'],
      hoverOffset: 4,
      label: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.keys = Object.keys(this.obj);
    this.values = Object.values(this.obj);
    this.pieData[0].data = this.values;
  }
}
