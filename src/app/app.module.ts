import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import {  PaginationModule } from 'ngx-bootstrap/pagination'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../app/modules/header/header.component';
import { BodyComponent } from '../app/modules/body/body.component';
import { FooterComponent } from '../app/modules/footer/footer.component';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import { FormComponent } from './components/form/form.component';
import { CharacterComponent } from './components/character/character.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { ApiService } from './services/api.service';
import { EpsChartComponent } from './components/eps-chart/eps-chart.component';
import { CharactersByPlanetChartComponent } from './components/characters-by-planet-chart/characters-by-planet-chart.component';
import { CharactersChartComponent } from './components/characters-chart/characters-chart.component';
import { ChartButtonComponent } from './components/chart-button/chart-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    FilterModalComponent,
    FormComponent,
    CharacterComponent,
    ListCharactersComponent,
    FilterButtonComponent,
    EpsChartComponent,
    CharactersByPlanetChartComponent,
    CharactersChartComponent,
    ChartButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginationModule.forRoot()
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
