import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzModalComponent } from './nz-modal.component';

describe('NzModalComponent', () => {
  let component: NzModalComponent;
  let fixture: ComponentFixture<NzModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NzModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
