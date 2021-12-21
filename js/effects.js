const START_VALUE = 40;

const SliderParams = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
}

let currentPictureClass = '';

const image = document.querySelector('.img-upload__preview img');

const effectsPanel = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.effect-level');
const sliderLevel = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const effectNone = document.querySelector('#effect-none');


const effects = {
  chrome: (value) => `grayscale(${parseInt(value, 10) * 0.01})`,
  sepia: (value) => `sepia(${parseInt(value, 10) * 0.01 })`,
  marvin: (value) => `invert(${parseInt(value, 10) }%)`,
  phobos: (value) => `blur(${(parseInt(value, 10) * 3) * 0.01 }px)`,
  heat: (value) => `brightness(${(parseInt(value, 10) * 3) * 0.01 })`,
  none: () => 'none',
};

const onAddEffect = (evt) => {
  const value = evt.target.value;
  if (value) {
    if (currentPictureClass) {
      image.classList.remove(currentPictureClass);
    }
    currentPictureClass = `effects__preview--${value}`
    image.classList.add(currentPictureClass);
    setSliderEffect(value);
  }
}

const setSliderEffect = (value) => {
  sliderContainer.style.display = effectNone.checked ? 'none' : 'block';
  sliderLevel.noUiSlider.set(START_VALUE);
  image.style.filter = effects[value](START_VALUE);
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
  sliderValue.value = evt[0];
  image.style.filter = effects[value](sliderValue.value);
})
