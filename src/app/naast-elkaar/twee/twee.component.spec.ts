import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweeComponent } from './twee.component';

describe('TweeComponent', () => {
  let component: TweeComponent;
  let fixture: ComponentFixture<TweeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
