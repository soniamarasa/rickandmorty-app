import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  async cleanFilter() {
    this.apiService.currentList = await this.apiService.getEndpoints('character', 1)
    this.apiService.isFiltering = false;
    this.apiService.currentPage = 1
  }

}
