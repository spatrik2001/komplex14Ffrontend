import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotaComponent } from './pilota.component';

describe('PilotaComponent', () => {
  let component: PilotaComponent;
  let fixture: ComponentFixture<PilotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
