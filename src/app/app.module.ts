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

const ROUTES: Routes = [
  { path: '', component: PoniesComponent},
  { path: 'races', component: RaceComponent},
  { path : 'add-pony', component: PonyReactiveComponent},
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
    RacesComponent,
    PonyReactiveComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
