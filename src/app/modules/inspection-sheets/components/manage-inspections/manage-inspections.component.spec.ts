import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInspectionsComponent } from './manage-inspections.component';

describe('ManageInspectionsComponent', () => {
  let component: ManageInspectionsComponent;
  let fixture: ComponentFixture<ManageInspectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageInspectionsComponent]
    });
    fixture = TestBed.createComponent(ManageInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
