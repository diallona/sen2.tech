import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCarrouselComponent } from './nav-carrousel.component';

describe('NavCarrouselComponent', () => {
  let component: NavCarrouselComponent;
  let fixture: ComponentFixture<NavCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
