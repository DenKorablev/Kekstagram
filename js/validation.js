import {cancelEvent} from './util.js';

const VALID_PARAMS = {
  MAX_HASHTAG: 5,
  MAX_LENGTH: 20
};

const MESSAGE = {
  HESTAG_START: 'Хэш-тег начинается с символа #',
  HESTAG_MIN_SYMBOL: 'Хеш-тег не может состоять только из одной решётки',
  HESTAG_MAX_LENGTH: 'Максимальная длина одного хэш-тега ',
  HESTAG_VALUE_INCLUSIVE: ' cимволов, включая решётку',
  HESTAG_NO_REPEAT: 'Один и тот же хэш-тег не может быть использован дважды',
  HESTAG_MAX_NUMBER: 'Хэштегов может быть максимум ',
  HESTAG_SEPARATOR: 'Хэш-теги разделяются пробелами'
};

const fieldHashtags = document.querySelector('.text__hashtags');
const fieldDescription = document.querySelector('.text__description');

fieldHashtags.addEventListener('input', () => {
  fieldHashtags.setCustomValidity('');

  const text = fieldHashtags.value.toLowerCase().trim();
  if (!text) return;

  const hashtags = text.split(/\s+/);

  const isNotHashtag = hashtags.some(item => item[0] !== '#');
  const isNotOnlyHashtag = hashtags.some(item => item === '#');
  const isLongHashtag = hashtags.some(item => {
    return item.length > VALID_PARAMS.MAX_LENGTH
  });
  const isRepeatHashtag = new Set(hashtags).size !== hashtags.length;
  const isMaxHashtag = hashtags.length > VALID_PARAMS.MAX_LENGTH;
  const isSeparatorHashtag =  hashtags.some(item => item.split('#').length - 1 > 1);

  if (isNotHashtag) {
    fieldHashtags.setCustomValidity(MESSAGE.HESTAG_START);
  } else if (isNotOnlyHashtag) {
    fieldHashtags.setCustomValidity(MESSAGE.HESTAG_MIN_SYMBOL);
  } else if (isLongHashtag) {
    fieldHashtags.setCustomValidity(MESSAGE.HESTAG_MAX_LENGTH + ' ' + VALID_PARAMS.MAX_LENGTH + ' ' + MESSAGE.HESTAG_VALUE_INCLUSIVE);
  } else if (isRepeatHashtag) {
    fieldHashtags.setCustomValidity(MESSAGE.HESTAG_NO_REPEAT);
  } else if (isMaxHashtag) {
    fieldHashtags.setCustomValidity(MESSAGE.HESTAG_MAX_NUMBER + ' ' + VALID_PARAMS.MAX_LENGTH);
  } else if (isSeparatorHashtag) {
    fieldHashtags.setCustomValidity(MESSAGE.HESTAG_SEPARATOR);
  }
})

fieldHashtags.addEventListener('keydown', cancelEvent)
fieldDescription.addEventListener('keydown', cancelEvent)
