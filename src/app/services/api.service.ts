import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  currentCharacterList!:any


  constructor(private http: HttpClient) { }

  public async getCharacter(page: number) {
    return await this.http.get(`${environment.api_url}character?page=${page}`).toPromise();
  }

  public async getLocation() {
    return await this.http.get(`${environment.api_url}location`).toPromise();
  }

  public async getEpisode() {
    return await this.http.get(`${environment.api_url}episode`).toPromise();
  }
}
