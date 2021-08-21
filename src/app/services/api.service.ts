import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  currentCharacterList!: any;
  
  epList: Array<any> = [];
  charList: Array<any> = [];


  constructor(private http: HttpClient) {}

  public async getEndpoints(endpoint: string, page: number) {
    return await this.http
      .get(`${environment.api_url}${endpoint}?page=${page}`)
      .toPromise();
  }

  // public async getLocation(page: number) {
  //   return await this.http.get(`${environment.api_url}location?page=${page}`).toPromise();
  // }

  // public async getEpisode(page: number) {
  //   return await this.http.get(`${environment.api_url}episode?page=${page}`).toPromise();
  // }
}
