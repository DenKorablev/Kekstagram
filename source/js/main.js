import './data.js';
import './validation.js';
import './photo-editor.js';
import { debounce } from './util.js';
import { onFilterClick, filterPhotos } from './filters.js';
import { renderPhotos } from './picture.js';
import { getData } from './api.js';

getData((photos) => {
  renderPhotos(photos);
  onFilterClick(debounce(() => filterPhotos(photos), 500));
});
