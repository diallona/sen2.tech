import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquettesComponent } from './maquettes.component';

describe('MaquettesComponent', () => {
  let component: MaquettesComponent;
  let fixture: ComponentFixture<MaquettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquettesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
