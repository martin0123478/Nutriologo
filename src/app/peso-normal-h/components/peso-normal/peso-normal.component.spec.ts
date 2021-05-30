import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoNormalComponent } from './peso-normal.component';

describe('PesoNormalComponent', () => {
  let component: PesoNormalComponent;
  let fixture: ComponentFixture<PesoNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesoNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesoNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
