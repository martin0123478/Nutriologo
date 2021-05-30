import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoBajoComponent } from './peso-bajo.component';

describe('PesoBajoComponent', () => {
  let component: PesoBajoComponent;
  let fixture: ComponentFixture<PesoBajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesoBajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesoBajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
