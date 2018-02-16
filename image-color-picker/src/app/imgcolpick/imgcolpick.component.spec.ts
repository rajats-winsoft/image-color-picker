import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcolComponent } from './imgcolpick.component';

describe('ImgcolpickComponent', () => {
  let component: ImgcolComponent;
  let fixture: ComponentFixture<ImgcolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgcolComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
