import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'chartjs-plugin-zoom'

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/modules/header/header.component';
import { BodyComponent } from '../app/modules/body/body.component';
import { FooterComponent } from '../app/modules/footer/footer.component';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import { FormComponent } from './components/form/form.component';
import { CharacterComponent } from './components/character/character.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { CharactersByPlanetChartComponent } from './components/characters-by-planet-chart/characters-by-planet-chart.component';
import { ChartButtonComponent } from './components/chart-button/chart-button.component';
import { ModalChartComponent } from './components/modal-chart/modal-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

import { ApiService } from './services/api.service';
import { EpisodeComponent } from './components/episode/episode.component';
import { LocationComponent } from './components/location/location.component';

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
    CharactersByPlanetChartComponent,
    ChartButtonComponent,
    ModalChartComponent,
    BarChartComponent,
    EpisodeComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    ChartsModule, 
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
