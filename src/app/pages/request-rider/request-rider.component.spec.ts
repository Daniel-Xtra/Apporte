import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRiderComponent } from './request-rider.component';

describe('RequestRiderComponent', () => {
  let component: RequestRiderComponent;
  let fixture: ComponentFixture<RequestRiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
