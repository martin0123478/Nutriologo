import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHombresComponent } from './hero-hombres.component';

describe('HeroHombresComponent', () => {
  let component: HeroHombresComponent;
  let fixture: ComponentFixture<HeroHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroHombresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
