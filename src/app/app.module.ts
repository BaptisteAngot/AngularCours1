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
import {FormsModule} from "@angular/forms";
import { RacesComponent } from './races/races.component';

const ROUTES: Routes = [
  { path: '', component: PoniesComponent},
  { path: 'races', component: RaceComponent},
  { path : 'add-pony', component: PonyComponent},
  { path : 'add-race', component: RacesComponent}
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
    RacesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
