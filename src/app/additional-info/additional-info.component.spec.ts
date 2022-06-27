import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalINFOComponent } from './additional-info.component';

describe('AdditionalINFOComponent', () => {
  let component: AdditionalINFOComponent;
  let fixture: ComponentFixture<AdditionalINFOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalINFOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalINFOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
