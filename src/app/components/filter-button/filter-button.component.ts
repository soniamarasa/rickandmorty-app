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
    this.modalRef = this.modalService.show(FilterModalComponent, {
      class: 'modal-dialog-top modal-lg',
    });
  }
}
