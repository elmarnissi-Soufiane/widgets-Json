import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecktwoComponent } from './checktwo.component';

describe('ChecktwoComponent', () => {
  let component: ChecktwoComponent;
  let fixture: ComponentFixture<ChecktwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecktwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecktwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
