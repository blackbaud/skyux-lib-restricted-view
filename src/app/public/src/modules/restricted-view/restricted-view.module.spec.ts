import {
  expect
} from '@skyux-sdk/testing';

import {
  RestrictedViewModule
} from './restricted-view.module';

describe('RestrictedViewModule', () => {
  it('should export', () => {
    const exportedModule = new RestrictedViewModule();
    expect(exportedModule).toBeDefined();
  });
});
