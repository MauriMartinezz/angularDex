import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhichComponent } from './which.component';

describe('WhichComponent', () => {
  let component: WhichComponent;
  let fixture: ComponentFixture<WhichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
