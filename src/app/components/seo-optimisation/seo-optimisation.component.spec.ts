import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOptimisationComponent } from './seo-optimisation.component';

describe('SeoOptimisationComponent', () => {
  let component: SeoOptimisationComponent;
  let fixture: ComponentFixture<SeoOptimisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoOptimisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoOptimisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
