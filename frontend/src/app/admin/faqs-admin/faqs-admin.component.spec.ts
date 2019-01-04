import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsAdminComponent } from './faqs-admin.component';

describe('FaqsAdminComponent', () => {
  let component: FaqsAdminComponent;
  let fixture: ComponentFixture<FaqsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
