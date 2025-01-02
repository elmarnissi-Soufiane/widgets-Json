import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoneComponent } from './checkone.component';

describe('CheckoneComponent', () => {
  let component: CheckoneComponent;
  let fixture: ComponentFixture<CheckoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
