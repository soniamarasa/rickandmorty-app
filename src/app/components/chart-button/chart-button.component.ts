import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ModalChartComponent } from '../modal-chart/modal-chart.component';

@Component({
  selector: 'app-chart-button',
  templateUrl: './chart-button.component.html',
  styleUrls: ['./chart-button.component.css'],
})
export class ChartButtonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
