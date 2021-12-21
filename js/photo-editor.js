import {isEscape} from './util.js';
import {initScale, finilazeScale} from './scale.js';
import {initEffects, finilazeEffects} from './effects.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const image = document.querySelector('.img-upload__preview img');

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    onCloseEditor();
  }
}

const onOpenEditor = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  image.src = URL.createObjectURL(uploadFile.files[0]);
  document.addEventListener('keydown', onPopupEscKeydown);
  initScale();
  initEffects();
}

const onCloseEditor = () => {
  uploadFile.value = '';
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  finilazeScale();
  finilazeEffects();
}

uploadFile.addEventListener('change', onOpenEditor);

uploadCancel.addEventListener('click', onCloseEditor);
