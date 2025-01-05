import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageApiSuluComponent } from './page-api-sulu.component';

describe('PageApiSuluComponent', () => {
  let component: PageApiSuluComponent;
  let fixture: ComponentFixture<PageApiSuluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageApiSuluComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageApiSuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
