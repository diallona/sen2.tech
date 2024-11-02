import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcritComponent } from './ecrit.component';

describe('EcritComponent', () => {
  let component: EcritComponent;
  let fixture: ComponentFixture<EcritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcritComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
