import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  filterOptions = ['Personagem', 'Localização', 'Episódios'];
  filterSelected = '';
  filterSelectedObj: any;

  status = ['Alive', 'Dead', 'Unknown'];
  genders = ['Male', 'Female', 'Genderless', 'Unknown'];

  form!: FormGroup;
  submitted = false;
  formOk = false;

  filters = [
    {
      key: 'character',
      label: 'Personagem',
      formOptions: ['name', 'status', 'species', 'type', 'gender'],
    },
    {
      key: 'location',
      label: 'Localização',
      formOptions: ['name', 'type', 'dimension'],
    },
    { key: 'episode', label: 'Episódios', formOptions: ['name', 'episode'] },
  ];

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  onFilterChange(value: any) {
    this.createForm(value);
    this.filterSelected = value;
  }

  createForm(value: string) {
    this.filterSelectedObj = this.filters.filter(
      (filter) => filter.label === value
    );
    const filterOptionSelected = this.filterSelectedObj[0].formOptions;
    const formGroup = filterOptionSelected.reduce((acc: any, obj: any) => {
      acc[obj] = ['', Validators.required];
      return acc;
    }, {});
    this.apiService.filEndpoint = this.filterSelectedObj[0].key;
    this.form = this.formBuilder.group(formGroup);
  }

  async onRegisterSubmit() {
    const entries = Object.entries(this.form.value);
    const filteredEntries = entries.filter((entry) => entry[1] !== '');
    this.apiService.filParams = filteredEntries.reduce((acc, el) => {
      acc += `${el[0]}=${el[1]}&`;
      return acc;
    }, '');
    this.apiService.filParams = this.apiService.filParams.substring(
      0,
      this.apiService.filParams.length - 1
    );
    try {
      const response = await this.apiService.filterEndpoint(
        this.filterSelectedObj[0].key,
        this.apiService.filParams
      );
      this.apiService.currentList = response;
      this.apiService.config.currentPage = 1;
      this.apiService.config.totalItems = this.apiService.currentList.info.count;
      this.apiService.isFiltering = true;
      this.closeModal.emit();
    } catch (e) {
      console.log(e)
      this.toastr.error(e.error.error, 'Erro');
      this.apiService.currentList = await this.apiService.getEndpoints('character', 1)
      this.apiService.isFiltering = false;
      return;
    }
  }
}
