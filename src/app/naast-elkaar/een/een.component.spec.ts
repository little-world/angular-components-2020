import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EenComponent } from './een.component';

describe('EenComponent', () => {
  let component: EenComponent;
  let fixture: ComponentFixture<EenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
