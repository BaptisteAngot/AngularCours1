import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceReactiveComponent } from './race-reactive.component';

describe('RaceReactiveComponent', () => {
  let component: RaceReactiveComponent;
  let fixture: ComponentFixture<RaceReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
