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
    this.apiService.config.currentPage = 1
    this.apiService.currentList = await this.apiService.getEndpoints('character', 1)
    this.apiService.config.totalItems = this.apiService.currentList.info.count
    this.apiService.isFiltering = false
  }

}
