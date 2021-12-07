const avatars = require('../src/components/game/avatars')


class CardManager {
  constructor() {
    console.log(`default avatar: ${avatars.default}`);
  }
}

module.exports = CardManager;