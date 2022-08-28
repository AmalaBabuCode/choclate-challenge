import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoclateOverviewComponent } from './choclate-overview.component';

describe('ChoclateOverviewComponent', () => {
  let component: ChoclateOverviewComponent;
  let fixture: ComponentFixture<ChoclateOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoclateOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoclateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
