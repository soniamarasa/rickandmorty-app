import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  currentList!: any;
  // currentPage: number = 1
  isFiltering = false;

  config = {
    itemsPerPage: 20,
    currentPage: 1,
    totalItems: 0
  }

  filEndpoint = '';
  filParams: any;

  epList: Array<any> = [];
  charList: Array<any> = [];

  constructor(private http: HttpClient) {}

  public async getEndpoints(endpoint: string, page: number) {
    return await this.http
      .get(`${environment.api_url}${endpoint}?page=${page}`)
      .toPromise();
  }

  public async filterEndpoint(endpoint: string, params: any) {
    return await this.http
      .get(`${environment.api_url}${endpoint}/?${params}`)
      .toPromise();
  }

  public async paginationFilterEndpoint(
    endpoint: string,
    params: any,
    page: any
  ) {
    return await this.http
      .get(`${environment.api_url}${endpoint}/?page=${page}&${params}`)
      .toPromise();
  }
}
