import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css'],
})
export class ListCharactersComponent implements OnInit {


  constructor(public apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    // this.apiService.config.currentPage = 1;
    await this.listCharacter();
    this.apiService.config.totalItems = this.apiService.currentList.info.count
  }

  scrollTop() {
    window.scrollTo(0, 100);
  }

  async pageChanged(page:any): Promise<void> {
    this.apiService.config.currentPage = page
    await this.listCharacter(page);
    this.scrollTop();
  }

  async listCharacter(page = 1): Promise<void> {
    if (!this.apiService.isFiltering) {
      this.apiService.currentList = await this.apiService.getEndpoints(
        'character',
        page
      );
    } else {
      this.apiService.currentList =
        await this.apiService.paginationFilterEndpoint(
          this.apiService.filEndpoint,
          this.apiService.filParams,
          page
        );
    }
    this.scrollTop();
  }
}
