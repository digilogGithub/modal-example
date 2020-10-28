import { TestBed } from '@angular/core/testing';

import { ConfigModalService } from './config-modal.service';

describe('ConfigModalService', () => {
  let service: ConfigModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
