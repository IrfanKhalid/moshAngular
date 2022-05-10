import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafWithParamComponent } from './leaf-with-param.component';

describe('LeafWithParamComponent', () => {
  let component: LeafWithParamComponent;
  let fixture: ComponentFixture<LeafWithParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafWithParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafWithParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
