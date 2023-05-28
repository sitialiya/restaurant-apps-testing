const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.nav-detail a');

  const firstRestaurant = locate('.nav-detail a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-item');
  const likedRestaurantName = await I.grabTextFrom('.nav-detail a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
