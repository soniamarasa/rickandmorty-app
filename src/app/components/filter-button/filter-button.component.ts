import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css'],
})
export class FilterButtonComponent implements OnInit {
  modalRef: BsModalRef | undefined;

  constructor(
    public apiService: ApiService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  async openFilterModal(): Promise<void> {
    this.apiService.config.currentPage = 1;
    this.apiService.currentList = await this.apiService.getEndpoints(
      'character',
      1
    );
    this.apiService.config.totalItems = this.apiService.currentList.info.count;
    this.apiService.isFiltering = false;
    this.modalRef = this.modalService.show(FilterModalComponent, {
      class: 'modal-dialog-top modal-lg',
    });
  }
}
