import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obesidad2Component } from './obesidad2.component';

describe('Obesidad2Component', () => {
  let component: Obesidad2Component;
  let fixture: ComponentFixture<Obesidad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obesidad2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Obesidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
