const PhotoParams = {
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
  STEP: 25,
};

const image = document.querySelector('.img-upload__preview img');

const scale = document.querySelector('.scale');
const btnMinus = scale.querySelector('.scale__control--smaller');
const btnPlus = scale.querySelector('.scale__control--bigger');
const scaleValue = scale.querySelector('.scale__control--value');


let startScaleValue = PhotoParams.DEFAULT;

const imgTransformScale = (size) => {
  scaleValue.value = `${size}%`;
  image.style = `transform: scale(${size / 100})`;
  startScaleValue = size;
}

const onScaleMinus = () => {
  if (startScaleValue > PhotoParams.MIN) {
    const size = startScaleValue - PhotoParams.STEP;
    imgTransformScale(size);
  }
}

const onScalePlus = () => {
  if (startScaleValue < PhotoParams.MAX) {
    const size = startScaleValue + PhotoParams.STEP;
    imgTransformScale(size);
  }
}

export const initScale = () => {
  imgTransformScale(PhotoParams.DEFAULT);
  btnMinus.addEventListener('click', onScaleMinus)
  btnPlus.addEventListener('click', onScalePlus)
};

export const finilazeScale = () => {
  imgTransformScale(PhotoParams.DEFAULT);
  btnMinus.removeEventListener('click', onScaleMinus)
  btnPlus.removeEventListener('click', onScalePlus)
};

