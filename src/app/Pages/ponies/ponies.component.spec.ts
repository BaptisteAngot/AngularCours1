import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoniesComponent } from './ponies.component';
import {AppComponent} from "../../app.component";
import {PonyDetailComponent} from "../pony-detail/pony-detail.component";
import {NameRacePipePipe} from "../../Pipe/name-race-pipe.pipe";
import {MenuComponent} from "../menu/menu.component";
import {PonyComponent} from "../pony/pony.component";
import {PonyReactiveComponent} from "../pony-reactive/pony-reactive.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {PonyService} from "../../Services/pony.service";

describe('PoniesComponent', () => {
  let component: PoniesComponent;
  let fixture: ComponentFixture<PoniesComponent>;

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
      declarations: [ PoniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
