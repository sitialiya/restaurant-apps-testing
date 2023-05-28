<<<<<<< HEAD
=======
const { async } = require("regenerator-runtime");
>>>>>>> cd979faebcf13cda876226716cba5c5205dea5dc
const assert = require('assert');

Feature('Unliking Restaurants');

Scenario('unliking one restaurant', async ({ I }) => {
<<<<<<< HEAD
  I.amOnPage('/');
  I.seeElement('.nav-detail a');

  const sampleRestaurant = locate('.nav-detail a').first();
  const sampleRestaurantName = await I.grabTextFrom(sampleRestaurant);
  I.click(sampleRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.nav-detail a');

  const restaurantFavorite = locate('.nav-detail a').first();
  const restaurantFavoriteName = await I.grabTextFrom(restaurantFavorite);

  assert.strictEqual(sampleRestaurantName, restaurantFavoriteName);

  I.click(restaurantFavorite);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.nav-detail a');
});
=======
    I.amOnPage('/');
    I.seeElement('.nav-detail a');

    const sampleRestaurant = locate('.nav-detail a').first();
    const sampleRestaurantName =  await I.grabTextFrom(sampleRestaurant);
    I.click(sampleRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.nav-detail a');

    const restaurantFavorite = locate('.nav-detail a').first();
    const restaurantFavoriteName = await I.grabTextFrom(restaurantFavorite);

    assert.strictEqual(sampleRestaurantName, restaurantFavoriteName);

    I.click(restaurantFavorite);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement('.nav-detail a');
});
>>>>>>> cd979faebcf13cda876226716cba5c5205dea5dc
