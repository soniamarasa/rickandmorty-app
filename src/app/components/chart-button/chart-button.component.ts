import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-chart-button',
  templateUrl: './chart-button.component.html',
  styleUrls: ['./chart-button.component.css']
})
export class ChartButtonComponent implements OnInit {

  @Input() chart: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
