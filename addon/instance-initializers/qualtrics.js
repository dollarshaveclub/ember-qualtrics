import Ember from 'ember';

const {
  Logger,
} = Ember;

export function initialize(appInstance) {
  const router = appInstance.lookup('router:main');
  router.on('didTransition', () => {
    Ember.run.once(this, () => {
      if (typeof QSI !== 'undefined' && typeof QSI.API !== 'undefined') {
        Logger.log('[QUALTRICS] Calling SI API');
        QSI.API.unload();
        QSI.API.load().done(QSI.API.run);
      } else {
        Logger.log("[QUALTRICS] Can't find SI API");
      }
    });
  });
}

export default {
  name: 'qualtrics',
  initialize,
};
