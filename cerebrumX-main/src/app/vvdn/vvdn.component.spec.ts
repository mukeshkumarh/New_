import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VVDNComponent } from './vvdn.component';

describe('VVDNComponent', () => {
  let component: VVDNComponent;
  let fixture: ComponentFixture<VVDNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VVDNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VVDNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
