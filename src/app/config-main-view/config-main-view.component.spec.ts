import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMainViewComponent } from './config-main-view.component';

describe('ConfigMainViewComponent', () => {
  let component: ConfigMainViewComponent;
  let fixture: ComponentFixture<ConfigMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
