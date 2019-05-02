import {
  SkyRestrictedViewAuthService
} from './auth.service';

describe('SkyRestrictedViewAuthService', () => {
  let authService: SkyRestrictedViewAuthService;
  let mockAuthTokenProvider: any;

  it('should authenticate when JWT contains 1bb.perms', () => {
    mockAuthTokenProvider = {
      getToken(args: any) {
        return Promise.resolve(true);
      }
    };
    authService = new SkyRestrictedViewAuthService(mockAuthTokenProvider as any);
    spyOn(authService.isAuthenticated, 'getValue').and.callThrough();
    spyOn(authService['auth'], 'getToken').and.returnValue(Promise.resolve('')).and.callThrough();
    spyOn<any>(authService, 'decode').and.returnValue({
      '1bb.perms': 1
    });
    authService.isAuthenticated.subscribe(next => {
      if (next) {
        expect(authService.isAuthenticated.getValue()).toBeTruthy();
      }
    }).unsubscribe();
  });

  it('should not authenticate when JWT does not contain 1bb.perms', () => {
    mockAuthTokenProvider = {
      getToken(args: any) {
        return Promise.resolve(true);
      }
    };
    authService = new SkyRestrictedViewAuthService(mockAuthTokenProvider as any);
    spyOn(authService.isAuthenticated, 'getValue').and.callThrough();
    spyOn(authService['auth'], 'getToken').and.returnValue(Promise.resolve('')).and.callThrough();
    spyOn<any>(authService, 'decode').and.returnValue({});
    authService.isAuthenticated.subscribe(next => {
      if (next) {
        expect(authService.isAuthenticated.getValue()).not.toBeTruthy();
      }
    }).unsubscribe();
  });

  it('should not authenticate when JWT contains invalid 1bb.perms', () => {
    mockAuthTokenProvider = {
      getToken(args: any) {
        return Promise.resolve(true);
      }
    };
    authService = new SkyRestrictedViewAuthService(mockAuthTokenProvider as any);
    spyOn(authService.isAuthenticated, 'getValue').and.callThrough();
    spyOn(authService['auth'], 'getToken').and.returnValue(Promise.resolve('')).and.callThrough();
    spyOn<any>(authService, 'decode').and.returnValue({
      '1bb.perms': 'invalid'
    });
    authService.isAuthenticated.subscribe(next => {
      if (next) {
        expect(authService.isAuthenticated.getValue()).not.toBeTruthy();
      }
    }).unsubscribe();
  });

  it('should not authenticate if call to get token fails', () => {
    mockAuthTokenProvider = {
      getToken(args: any) {
        return Promise.reject(false);
      }
    };
    authService = new SkyRestrictedViewAuthService(mockAuthTokenProvider as any);
    spyOn(authService.isAuthenticated, 'getValue').and.callThrough();
    spyOn(authService['auth'], 'getToken').and.returnValue(Promise.reject('')).and.callThrough();
    expect(authService.isAuthenticated.getValue).not.toHaveBeenCalled();
  });
});
