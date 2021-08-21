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
  epResponse: any = undefined;
  modalRef: BsModalRef | undefined;

  constructor(
    public apiService: ApiService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  async openChartModal(): Promise<void> {
    this.hasNextPage = true;
    while (this.hasNextPage) {
      this.epResponse = await this.apiService.getEndpoints(
        'episode',
        this.currentPage
      );
      if (this.epResponse) {
        this.epResponse.results.forEach((ep: any) =>
          this.apiService.epList.push(ep)
        );
        this.epResponse.info.next ? this.currentPage++ : this.stopRequesting();
      }
    }

    let seasonCount: any = {};
    this.apiService.epList.forEach((ep) => {
      const season = ep.episode.substring(0, 3);
      seasonCount[season] ? seasonCount[season]++ : (seasonCount[season] = 1);
    });

    const initialState = {
      seasonCount,

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
