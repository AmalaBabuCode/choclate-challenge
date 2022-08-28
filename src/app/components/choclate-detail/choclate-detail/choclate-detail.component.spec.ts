import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoclateDetailComponent } from './choclate-detail.component';

describe('ChoclateDetailComponent', () => {
  let component: ChoclateDetailComponent;
  let fixture: ComponentFixture<ChoclateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoclateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoclateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
