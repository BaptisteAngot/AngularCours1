import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PoniesComponent} from './Pages/ponies/ponies.component';
import {RaceComponent} from './Pages/race/race.component';
import {PonyDetailComponent} from './Pages/pony-detail/pony-detail.component';
import {RaceDetailComponent} from './Pages/race-detail/race-detail.component';
import {NameRacePipePipe} from './Pipe/name-race-pipe.pipe';
import {MenuComponent} from './Pages/menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import {PonyComponent} from './Pages/pony/pony.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RacesComponent} from './Pages/races/races.component';
import {PonyReactiveComponent} from './Pages/pony-reactive/pony-reactive.component';
import {RaceReactiveComponent} from './Pages/race-reactive/race-reactive.component';
import {PonyService} from './Services/pony.service';
import {HttpClientModule} from '@angular/common/http';
import {RaceServiceService} from './Services/race-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {UserOKGuard} from './Guard/user-ok.guard';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


const ROUTES: Routes = [
  {path: '', component: PoniesComponent},
  {path: 'races', component: RaceComponent},
  {path: 'add-pony', component: PonyComponent, canActivate: [UserOKGuard]},
  {path: 'update-pony/:id', component: PonyComponent, canActivate: [UserOKGuard]},
  {path: 'add-race', component: RacesComponent, canActivate: [UserOKGuard]},
  {path: 'update-race/:id', component: RacesComponent, canActivate: [UserOKGuard]},
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
    MatSliderModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [PonyService, RaceServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
