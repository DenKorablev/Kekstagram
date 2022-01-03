import './data.js';
import './validation.js';
import { setFormSubmit } from './photo-editor.js';
import { renderPhotos } from './picture.js';
import { getData } from './api.js';

getData((photos) => renderPhotos(photos));

setFormSubmit();

