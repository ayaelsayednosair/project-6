import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParantComponent } from './parant.component';

describe('ParantComponent', () => {
  let component: ParantComponent;
  let fixture: ComponentFixture<ParantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParantComponent]
    });
    fixture = TestBed.createComponent(ParantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
