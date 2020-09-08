import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyReactiveComponent } from './pony-reactive.component';

describe('PonyReactiveComponent', () => {
  let component: PonyReactiveComponent;
  let fixture: ComponentFixture<PonyReactiveComponent>;

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
