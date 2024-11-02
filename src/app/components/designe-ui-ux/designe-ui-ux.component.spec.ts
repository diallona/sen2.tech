import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigneUiUxComponent } from './designe-ui-ux.component';

describe('DesigneUiUxComponent', () => {
  let component: DesigneUiUxComponent;
  let fixture: ComponentFixture<DesigneUiUxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesigneUiUxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesigneUiUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
