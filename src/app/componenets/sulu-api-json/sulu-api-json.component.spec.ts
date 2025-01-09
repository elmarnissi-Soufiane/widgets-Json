import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuluApiJsonComponent } from './sulu-api-json.component';

describe('SuluApiJsonComponent', () => {
  let component: SuluApiJsonComponent;
  let fixture: ComponentFixture<SuluApiJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuluApiJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuluApiJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
