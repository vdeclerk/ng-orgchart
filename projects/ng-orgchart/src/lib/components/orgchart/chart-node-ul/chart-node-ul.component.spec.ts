import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNodeUlComponent } from './chart-node-ul.component';

describe('ChartNodeUlComponent', () => {
  let component: ChartNodeUlComponent;
  let fixture: ComponentFixture<ChartNodeUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartNodeUlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNodeUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
