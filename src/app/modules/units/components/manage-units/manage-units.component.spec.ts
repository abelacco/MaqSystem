import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUnitsComponent } from './manage-units.component';

describe('ManageUnitsComponent', () => {
  let component: ManageUnitsComponent;
  let fixture: ComponentFixture<ManageUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageUnitsComponent]
    });
    fixture = TestBed.createComponent(ManageUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
