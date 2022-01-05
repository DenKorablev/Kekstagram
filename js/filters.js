import { shuffle } from './util.js';
import { renderPhotos } from './picture.js';

const imgFilters = document.querySelector('.img-filters');

const removePhotos = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach(el => el.remove());
}

const removeActiveClass = () => {
  const active = document.querySelector('.img-filters__button--active');
  active.classList.remove('img-filters__button--active');
}

let currentFilter = '';

export const filterPhotos = (photos) => {
  if (currentFilter === 'filter-default') {
    renderPhotos(photos)
  } else if (currentFilter === 'filter-random') {
    const data = shuffle(photos.slice());
    renderPhotos(data.slice(10));
  } else if (currentFilter === 'filter-discussed') {
    const data = photos.slice().sort((a,b) => b.comments.length - a.comments.length);
    renderPhotos(data)
  }
};

export const onFilterClick = (cb) => {
  imgFilters.addEventListener('click', (evt) => {
    const classes = evt.target.classList;
    if (classes.contains('img-filters__button') && !classes.contains('img-filters__button--active')) {
      removePhotos();
      removeActiveClass();
      classes.add('img-filters__button--active');
      currentFilter = evt.target.id;
      cb();
    }
  });
};

