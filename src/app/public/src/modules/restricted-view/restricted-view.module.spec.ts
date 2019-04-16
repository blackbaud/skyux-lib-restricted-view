import {
  expect
} from '@blackbaud/skyux-builder/runtime/testing/browser';

import {
  RestrictedViewModule
} from './restricted-view.module';

describe('RestrictedViewModule', () => {
  it('should export', () => {
    const exportedModule = new RestrictedViewModule();
    expect(exportedModule).toBeDefined();
  });
});
