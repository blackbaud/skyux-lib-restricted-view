import {
  RestrictedViewAuthService
} from './auth.service';

describe('RestrictedViewAuthService', () => {
  let authService: RestrictedViewAuthService;
  let mockAuthTokenProvider: any;

  it('should authenticate when JWT contains 1bb.perms', () => {
    mockAuthTokenProvider = {
      getToken(args: any) {
        return Promise.resolve(true);
      }
    };
    authService = new RestrictedViewAuthService(mockAuthTokenProvider as any);
    spyOn(authService.isAuthenticated, 'getValue').and.callThrough();
    spyOn(authService['auth'], 'getToken').and.returnValue(Promise.resolve()).and.callThrough();
    spyOn<any>(authService, 'decode').and.returnValue({
      '1bb.perms': 1
    });
    authService.isAuthenticated.subscribe(next => {
      if (next) {
        expect(authService.isAuthenticated.getValue()).toBeTruthy();
      }
    });
  });

  it('should not authenticate when JWT does not contain 1bb.perms', () => {
    mockAuthTokenProvider = {
      getToken(args: any) {
        return Promise.resolve(true);
      }
    };
    authService = new RestrictedViewAuthService(mockAuthTokenProvider as any);
    spyOn(authService.isAuthenticated, 'getValue').and.callThrough();
    spyOn(authService['auth'], 'getToken').and.returnValue(Promise.resolve()).and.callThrough();
    spyOn<any>(authService, 'decode').and.returnValue({});
    authService.isAuthenticated.subscribe(next => {
      if (next) {
        expect(authService.isAuthenticated.getValue()).not.toBeTruthy();
      }
    });
  });

  it('should not authenticate when JWT contains invalid 1bb.perms', () => {
    mockAuthTokenProvider = {
      getToken(args: any) {
        return Promise.resolve(true);
      }
    };
    authService = new RestrictedViewAuthService(mockAuthTokenProvider as any);
    spyOn(authService.isAuthenticated, 'getValue').and.callThrough();
    spyOn(authService['auth'], 'getToken').and.returnValue(Promise.resolve()).and.callThrough();
    spyOn<any>(authService, 'decode').and.returnValue({
      '1bb.perms': 'invalid'
    });
    authService.isAuthenticated.subscribe(next => {
      if (next) {
        expect(authService.isAuthenticated.getValue()).not.toBeTruthy();
      }
    });
  });

  it('should not authenticate if call to get token fails', () => {
    mockAuthTokenProvider = {
      getToken(args: any) {
        return Promise.reject(false);
      }
    };
    authService = new RestrictedViewAuthService(mockAuthTokenProvider as any);
    spyOn(authService.isAuthenticated, 'getValue').and.callThrough();
    spyOn(authService['auth'], 'getToken').and.returnValue({res: undefined, err: {}}).and.callThrough();
    expect(authService.isAuthenticated.getValue).not.toHaveBeenCalled();
  });
});
