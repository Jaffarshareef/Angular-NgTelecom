import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadBandComponent } from './broad-band.component';

describe('BroadBandComponent', () => {
  let component: BroadBandComponent;
  let fixture: ComponentFixture<BroadBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
