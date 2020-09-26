import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyComponent } from './pony.component';
import {AppComponent} from "../../app.component";
import {PonyDetailComponent} from "../pony-detail/pony-detail.component";
import {NameRacePipePipe} from "../../Pipe/name-race-pipe.pipe";
import {RouterTestingModule} from "@angular/router/testing";
import {PonyService} from "../../Services/pony.service";
import {PoniesComponent} from "../ponies/ponies.component";
import {MenuComponent} from "../menu/menu.component";
import {PonyReactiveComponent} from "../pony-reactive/pony-reactive.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {Pony} from "../../Models/pony";

describe('PonyComponent', () => {
  let component: PonyComponent;
  let fixture: ComponentFixture<PonyComponent>;

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
        RouterTestingModule
      ],
      providers: [PonyService],
    })
      .compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
