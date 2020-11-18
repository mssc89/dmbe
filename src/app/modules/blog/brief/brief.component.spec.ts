import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BriefComponent } from './brief.component';

describe('BriefComponent', () => {
  let component: BriefComponent;
  let fixture: ComponentFixture<BriefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
