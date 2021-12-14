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