import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obesidad1Component } from './obesidad1.component';

describe('Obesidad1Component', () => {
  let component: Obesidad1Component;
  let fixture: ComponentFixture<Obesidad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obesidad1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Obesidad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
