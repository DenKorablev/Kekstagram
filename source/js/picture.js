import { onShowPicture } from './full-photo.js';

const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photosListElement = document.querySelector('.pictures');
const imgFilters = document.querySelector('.img-filters');

const photoListFragments = document.createDocumentFragment();

export const renderPhotos = (photos) => {
  photos.forEach((object) => {
    const photo = photoTemplate.cloneNode(true);

    photo.querySelector('.picture__img').src = object.url;
    photo.querySelector('.picture__comments').textContent = object.comments.length;
    photo.querySelector('.picture__likes').textContent = object.likes;

    photo.addEventListener('click', (evt) => {
      evt.preventDefault();
      onShowPicture(object)
    })

    photoListFragments.appendChild(photo);
    imgFilters.classList.remove('img-filters--inactive');
  });

  photosListElement.appendChild(photoListFragments)
};
