import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal-chart',
  templateUrl: './modal-chart.component.html',
  styleUrls: ['./modal-chart.component.css'],
})
export class ModalChartComponent implements OnInit, OnDestroy {
  chartLab: string | undefined;
  title:string | undefined ;
  seasonCount: any;

  constructor(public bsModalRef: BsModalRef, private apiService: ApiService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.apiService.epList = [];
  }
}
