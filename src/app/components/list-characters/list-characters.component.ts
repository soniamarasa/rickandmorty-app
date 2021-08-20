import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css'],
})
export class ListCharactersComponent implements OnInit {
  currentCharacterList!:any

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    this.currentCharacterList = await this.apiService.getCharacter();
    console.log(this.currentCharacterList);
  }
}
