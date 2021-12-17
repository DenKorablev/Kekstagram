import {USERS} from './data.js';
import {onShowPicture} from './full-photo.js';

const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photosListElement = document.querySelector('.pictures');

const createPhotos = USERS;
const photoListFragments = document.createDocumentFragment();

export const renderPhotos = () => {
  createPhotos.forEach((object) => {
    const photo = photoTemplate.cloneNode(true);

    photo.querySelector('.picture__img').src = object.url;
    photo.querySelector('.picture__comments').textContent = object.comments.length;
    photo.querySelector('.picture__likes').textContent = object.likes;

    photo.addEventListener('click', (evt) => {
      evt.preventDefault();
      onShowPicture(object)
    })

    photoListFragments.appendChild(photo);
  });

  photosListElement.appendChild(photoListFragments)
};
