const ALERT_SHOW_TIME = 5000;
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

export const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) return -1;

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomArrayElement = (array) => {
  return array[getRandomInt(1, array.length - 1)]
}

export const stringCount = (text, sign) => {
  return text.length <= sign;
}

export const randomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export const isEscape = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
}

export const cancelEvent = (evt) => {
  if (isEscape(evt)) {
    evt.stopPropagation();
    evt.preventDefault();
  }
}

export const showSuccess = () => {
  const container = successTemplate.cloneNode(true);

  container.querySelector('.success__button').addEventListener('click', () => {
    container.remove();
  });

  document.body.append(container);
};

export const showAlert = (message) => {
  const container = errorTemplate.cloneNode(true);

  container.querySelector('.error__title').textContent = message;
  container.querySelector('.error__button').remove();

  document.body.append(container);

  setTimeout(() => {
    container.remove();
  }, ALERT_SHOW_TIME);
};
