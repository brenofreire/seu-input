import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuInputComponent } from './seu-input.component';

describe('SeuInputComponent', () => {
  let component: SeuInputComponent;
  let fixture: ComponentFixture<SeuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
