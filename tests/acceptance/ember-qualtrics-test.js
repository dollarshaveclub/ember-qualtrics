import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import ENV from 'dummy/config/environment';

moduleForAcceptance('Acceptance | ember qualtrics');

test('visiting /intercept', (assert) => {
  visit('/intercept');

  andThen(() => {
    assert.equal(Ember.$(`#${ENV.qualtrics.key}`).length, 1);
    assert.equal(currentURL(), '/intercept');
  });
});
