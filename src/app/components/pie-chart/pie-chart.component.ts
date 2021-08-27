import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() obj: any;
  @Input() chartLab: any | undefined;
  keys: any = undefined;
  values: any = undefined;

  public pieChartOptions = {
    responsive: true,
    scales: {
    },
  };

  public pieData = [
    {
      data: [],
      backgroundColor: [
        '#1770B5',
        '#FF8306',
        '#760E37',
        '#422956',
      ],
      hoverOffset: 4,
      label: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.keys = Object.keys(this.obj);
    this.values = Object.values(this.obj);
    this.pieData[0].data = this.values;
    this.pieData[0].label = this.chartLab;
  }
}