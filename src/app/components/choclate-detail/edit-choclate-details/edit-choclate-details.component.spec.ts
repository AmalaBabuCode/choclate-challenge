import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoclateDetailsComponent } from './edit-choclate-details.component';

describe('EditChoclateDetailsComponent', () => {
  let component: EditChoclateDetailsComponent;
  let fixture: ComponentFixture<EditChoclateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChoclateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoclateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
