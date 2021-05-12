import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomedationComponent } from './recomedation.component';

describe('RecomedationComponent', () => {
  let component: RecomedationComponent;
  let fixture: ComponentFixture<RecomedationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomedationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomedationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
