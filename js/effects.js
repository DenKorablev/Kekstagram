const SliderParams = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
}

const image = document.querySelector('.img-upload__preview img');

const effectsPanel = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.effect-level');
const sliderLevel = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const effectNone = document.querySelector('#effect-none');

let currentPictureClass = '';

const effects = {
  chrome: {
    min: 0,
    max: 1,
    setFilter: (value) => `grayscale(${value})`
  },
  sepia: {
    min: 0,
    max: 1,
    setFilter: (value) => `sepia(${value})`
  },
  marvin: {
    min: 0,
    max: 100,
    setFilter: (value) => `invert(${value}%)`
  },
  phobos: {
    min: 0,
    max: 3,
    setFilter: (value) => `blur(${value}px)`
  },
  heat: {
    min: 1,
    max: 3,
    setFilter: (value) => `brightness(${value})`
  },
  none: {
    min: 0,
    max: 0,
    setFilter: () => `none`
  }
};

const onAddEffect = (evt) => {
  const value = evt.target.value;
  sliderLevel.noUiSlider.set(100);
  if (currentPictureClass) {
    image.classList.remove(currentPictureClass);
  }
  if (value) {
    currentPictureClass = `effects__preview--${value}`
    image.classList.add(currentPictureClass);
    sliderContainer.style.display = effectNone.checked ? 'none' : 'block';
    debugger
    image.style.filter = effects[value].setFilter(parseInt(sliderValue.value));
  }
}

export const initEffects = () => {
  effectsPanel.querySelector('#effect-none').checked = true;
  effectsPanel.addEventListener('click', onAddEffect);
  sliderContainer.style.display = 'none';
};

export const finilazeEffects = () => {
  effectsPanel.removeEventListener('click', onAddEffect);
};

window.noUiSlider.create(sliderLevel, {
  range: {
    min: SliderParams.MIN,
    max: SliderParams.MAX,
  },
  start: SliderParams.STEP,
  connect: 'lower',
})

sliderLevel.noUiSlider.on('change', (evt) => {
  const value = currentPictureClass.replace('effects__preview--', '');
  sliderValue.value = sliderLevel.noUiSlider.get();
  image.style.filter = effects[value].setFilter(parseInt(sliderValue.value));
})
