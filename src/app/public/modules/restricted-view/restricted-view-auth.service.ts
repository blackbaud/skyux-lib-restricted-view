import {
  Injectable
} from '@angular/core';

import {
  BBAuthGetTokenArgs
} from '@blackbaud/auth-client';

import {
  BehaviorSubject
} from 'rxjs';

import {
  SkyAuthTokenProvider
} from '@skyux/http';

const jwtDecode = require('jwt-decode');

@Injectable()
export class SkyRestrictedViewAuthService  {

  public isAuthenticated = new BehaviorSubject<boolean>(false);
  private decode: any = jwtDecode;

  constructor(private auth: SkyAuthTokenProvider) {
    this.checkForAuth();
  }

  private checkForAuth() {
    const args: BBAuthGetTokenArgs = {
      disableRedirect: true
    };

    this.auth
      .getToken(args)
      .then((token) => {
        let permissions = this.decode(token)['1bb.perms'];
        if (permissions) {
          if (typeof permissions === 'number') {
            permissions = [permissions];
          }
          if (permissions.indexOf(1) > -1) {
            this.isAuthenticated.next(true);
          }
        }
      },
      () => {});
  }
}
