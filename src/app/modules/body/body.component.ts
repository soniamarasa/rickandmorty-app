import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  hasNextPage: boolean = true;
  currentPage: number = 1;
  apiResponse: any = undefined;

  currentEpObj: any = {};
  currentLocalObj: any = {};

  renderGraphs: boolean = false;

  constructor(public apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    await this.requestData('eps');
    await this.requestData('character');
    this.renderGraphs = true;
  }

  async cleanFilter() {
    this.apiService.config.currentPage = 1
    this.apiService.currentList = await this.apiService.getEndpoints('character', 1)
    this.apiService.config.totalItems = this.apiService.currentList.info.count
    this.apiService.isFiltering = false
  }

  stopRequesting() {
    this.currentPage = 1;
    this.hasNextPage = false;
  }

  async requestData(key: string) {
    this.hasNextPage = true;
    const endpoint = key === 'eps' ? 'episode' : 'location';
    const apiList = key === 'eps' ? 'epList' : 'charList';
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

    key === 'eps' ? (this.currentEpObj = {}) : (this.currentLocalObj = {});
    if (key === 'eps') {
      this.apiService.epList.forEach((ep) => {
        const season = ep.episode.substring(0, 3);
        this.currentEpObj[season]
          ? this.currentEpObj[season]++
          : (this.currentEpObj[season] = 1);
      });
    } else {
      this.apiService.charList.forEach((local) => {
        this.currentLocalObj[local.name] = local.residents.length;
      });
    }
  }
}
