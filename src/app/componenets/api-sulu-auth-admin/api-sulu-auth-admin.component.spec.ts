import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSuluAuthAdminComponent } from './api-sulu-auth-admin.component';

describe('ApiSuluAuthAdminComponent', () => {
  let component: ApiSuluAuthAdminComponent;
  let fixture: ComponentFixture<ApiSuluAuthAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSuluAuthAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiSuluAuthAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
