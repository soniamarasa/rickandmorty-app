import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input() episode: any;

  constructor() { }

  ngOnInit(): void {
  }

}
