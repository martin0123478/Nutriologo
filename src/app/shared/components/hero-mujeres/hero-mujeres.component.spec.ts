import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMujeresComponent } from './hero-mujeres.component';

describe('HeroMujeresComponent', () => {
  let component: HeroMujeresComponent;
  let fixture: ComponentFixture<HeroMujeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMujeresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMujeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
