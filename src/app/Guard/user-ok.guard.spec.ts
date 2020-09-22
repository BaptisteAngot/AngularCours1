import { TestBed } from '@angular/core/testing';

import { UserOKGuard } from './user-ok.guard';

describe('UserOKGuard', () => {
  let guard: UserOKGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserOKGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
