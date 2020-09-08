import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RaceComponent } from './race/race.component';
import { PonyDetailComponent } from './pony-detail/pony-detail.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { NameRacePipePipe } from './name-race-pipe.pipe';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import { PonyComponent } from './pony/pony.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RacesComponent } from './races/races.component';
import { PonyReactiveComponent } from './pony-reactive/pony-reactive.component';
import { RaceReactiveComponent } from './race-reactive/race-reactive.component';
import {PonyService} from "./pony.service";
import {HttpClientModule} from "@angular/common/http";
import {RaceServiceService} from "./race-service.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';



const ROUTES: Routes = [
  { path: '', component: PoniesComponent},
  { path: 'races', component: RaceComponent},
  { path : 'add-pony', component: PonyComponent},
  { path : 'update-pony/:id', component: PonyComponent},
  { path : 'add-race', component: RacesComponent},
  { path : 'update-race/:id', component: RacesComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RaceComponent,
    PonyDetailComponent,
    RaceDetailComponent,
    NameRacePipePipe,
    MenuComponent,
    PonyComponent,
    RacesComponent,
    PonyReactiveComponent,
    RaceReactiveComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatMenuModule
    ],
  providers: [PonyService, RaceServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
