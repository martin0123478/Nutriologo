import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obesidad3Component } from './obesidad3.component';

describe('Obesidad3Component', () => {
  let component: Obesidad3Component;
  let fixture: ComponentFixture<Obesidad3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Obesidad3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Obesidad3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
