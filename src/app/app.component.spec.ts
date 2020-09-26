import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PoniesComponent} from "./Pages/ponies/ponies.component";
import {PonyDetailComponent} from "./Pages/pony-detail/pony-detail.component";
import {NameRacePipePipe} from "./Pipe/name-race-pipe.pipe";
import {MenuComponent} from "./Pages/menu/menu.component";
import {PonyComponent} from "./Pages/pony/pony.component";
import {PonyReactiveComponent} from "./Pages/pony-reactive/pony-reactive.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {PonyService} from "./Services/pony.service";

describe('AppComponent', () => {
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
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'littleponey'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Mon petit poney');
  });
});
