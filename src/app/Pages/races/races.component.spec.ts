import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesComponent } from './races.component';
import {AppComponent} from "../../app.component";
import {PoniesComponent} from "../ponies/ponies.component";
import {PonyDetailComponent} from "../pony-detail/pony-detail.component";
import {NameRacePipePipe} from "../../Pipe/name-race-pipe.pipe";
import {MenuComponent} from "../menu/menu.component";
import {PonyComponent} from "../pony/pony.component";
import {PonyReactiveComponent} from "../pony-reactive/pony-reactive.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {PonyService} from "../../Services/pony.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('RacesComponent', () => {
  let component: RacesComponent;
  let fixture: ComponentFixture<RacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PoniesComponent,
        PonyDetailComponent,
        NameRacePipePipe,
        MenuComponent,
        PonyComponent,
        PonyReactiveComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [PonyService],
    })
      .compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
