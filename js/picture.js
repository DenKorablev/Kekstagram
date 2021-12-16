import {USERS} from './data.js';

const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photosListElement = document.querySelector('.pictures');

const createPhotos = USERS;
const photoListFragments = document.createDocumentFragment();

createPhotos.forEach(({url, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoListFragments.appendChild(photoElement);
});

export const renderPhotos = () => photosListElement.appendChild(photoListFragments);
