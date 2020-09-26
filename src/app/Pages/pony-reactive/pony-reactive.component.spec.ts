import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyReactiveComponent } from './pony-reactive.component';
import {AppComponent} from "../../app.component";
import {PoniesComponent} from "../ponies/ponies.component";
import {PonyDetailComponent} from "../pony-detail/pony-detail.component";
import {NameRacePipePipe} from "../../Pipe/name-race-pipe.pipe";
import {MenuComponent} from "../menu/menu.component";
import {PonyComponent} from "../pony/pony.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {PonyService} from "../../Services/pony.service";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('PonyReactiveComponent', () => {
  let component: PonyReactiveComponent;
  let fixture: ComponentFixture<PonyReactiveComponent>;

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
        ReactiveFormsModule
      ],
      providers: [PonyService],
    })
      .compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonyReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
