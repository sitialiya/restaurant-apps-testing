import API_ENDPOINT from '../../globals/api-endpoint';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title" tabindex="4">${restaurant.name}</h2>
  <article class='restaurant-info'>
    <picture>
      <source class="restaurant__image" media="(max-width: 500px)" srcset="${API_ENDPOINT.IMAGE.SMALL}${restaurant.pictureId}" alt="${restaurant.name}" type="image/jpeg" tabindex="4">
      <source class="restaurant__image" media="(min-width: 1200px)" srcset="${API_ENDPOINT.IMAGE.LARGE}${restaurant.pictureId}" alt="${restaurant.name}" type="image/jpeg" tabindex="4">
      <img class="restaurant__image lazyload" data-src="${API_ENDPOINT.IMAGE.MEDIUM}${restaurant.pictureId}" alt="${restaurant.name}" width="300" height="200" tabindex="4"/>
    </picture>
    <div class="restaurant__info">
      <h3 class="rating" tabindex="4">⭐️ ${restaurant.rating}</h3>
      <p tabindex="4">${restaurant.description}</p>
      <h3 tabindex="4">Lokasi</h3>
      <p class="city" tabindex="4">Kota : ${restaurant.city}</p>
      <p tabindex="4">Alamat : ${restaurant.address}</p>
      <h3 tabindex="4">Menu ${restaurant.name}</h3>
      <h4 tabindex="4">Menu Makanan</h4>
      <ul>
        ${restaurant.menus.foods.map((foods) => `<li tabindex="4">${foods.name}</li>`).join('')}
      </ul>
      <h4 tabindex="4">Menu Minuman</h4>
      <ul>
        ${restaurant.menus.drinks.map((drinks) => `<li tabindex="4">${drinks.name}</li>`).join('')}
      </ul>
      <h3 tabindex="4">Customer Reviews</h3>
      <div class="review">
        ${restaurant.customerReviews.map((review) => `
        <div class="review-info">
          <p class="review__name" tabindex="4">${review.name}</p>
          <p class="review__date" tabindex="4">${review.date}</p>
          <p class="review__text" tabindex="4">${review.review}</p>
        </div>
        `).join('')}
        </div>
    </div>
  </article>
`;

const createRestaurantItemTemplate = (restaurants) => `
  <article class="content-item">
    <picture>
      <source class="restaurant__image" media="(max-width: 500px)" srcset="${API_ENDPOINT.IMAGE.SMALL}${restaurants.pictureId}" alt="${restaurants.name}" type="image/jpeg" tabindex="4">
      <source class="restaurant__image" media="(min-width: 1200px)" srcset="${API_ENDPOINT.IMAGE.LARGE}${restaurants.pictureId}" alt="${restaurants.name}" type="image/jpeg" tabindex="4">
      <img class="restaurant__image lazyload" data-src="${API_ENDPOINT.IMAGE.MEDIUM}${restaurants.pictureId}" alt="${restaurants.name}" width="300" height="200" tabindex="4"/>
    </picture>
    <p class='rating' tabindex="4">⭐️ ${restaurants.rating} </p>
    <p class='city' tabindex="4" >Kota : ${restaurants.city}</p>
    <h1 tabindex="4" class='nav-detail'>
    <a href="#/detail/${restaurants.id}" tabindex="4">${restaurants.name}</a>
    </h1>
    <p tabindex="4">${restaurants.description}</p>
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" tabindex="4">
  <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="liked" tabindex="4">
  <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
