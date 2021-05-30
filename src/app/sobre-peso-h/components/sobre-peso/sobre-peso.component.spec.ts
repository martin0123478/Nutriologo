import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrePesoComponent } from './sobre-peso.component';

describe('SobrePesoComponent', () => {
  let component: SobrePesoComponent;
  let fixture: ComponentFixture<SobrePesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrePesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrePesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
