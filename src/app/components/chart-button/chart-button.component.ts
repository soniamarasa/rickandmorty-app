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
  @Input() chart: string | undefined;
  @Input() key: string | undefined;
  hasNextPage: boolean = true;
  currentPage: number = 1;
  apiResponse: any = undefined;
  modalRef: BsModalRef | undefined;

  constructor(
    public apiService: ApiService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  async openChartModal(): Promise<void> {
    this.hasNextPage = true;
    const endpoint = this.key === 'eps' ? 'episode' : 'location';
    const apiList = this.key === 'eps' ? 'epList' : 'charList';
    while (this.hasNextPage) {
      this.apiResponse = await this.apiService.getEndpoints(
        endpoint,
        this.currentPage
      );
      if (this.apiResponse) {
        this.apiResponse.results.forEach((item: any) =>
          this.apiService[apiList].push(item)
        );
        this.apiResponse.info.next ? this.currentPage++ : this.stopRequesting();
      }
    }

    let obj: any = {};
    if (this.key === 'eps') {
      this.apiService.epList.forEach((ep) => {
        const season = ep.episode.substring(0, 3);
        obj[season] ? obj[season]++ : (obj[season] = 1);
      });
    } else {
      this.apiService.charList.forEach((local) => {
        obj[local.name] = local.residents.length;
      });
    }

    const initialState = {
      obj,

      title:
        this.key === 'eps'
          ? 'Total de Episódios por Temporada'
          : 'Total de Personagens por Planeta',

      chartLab:
        this.key === 'eps'
          ? 'Quantidade de Episódios'
          : 'Quantidade de Personagens',
    };

    this.modalRef = this.modalService.show(ModalChartComponent, {
      class: 'modal-dialog-top modal-lg',
      initialState,
    });
  }

  stopRequesting() {
    this.currentPage = 1;
    this.hasNextPage = false;
  }
}
