const RANDOM_PHOTO_COUNT = 25;
const LIKES = {
  MIN: 25,
  MAX: 200
}
const COMMENTS = {
  MIN: 1,
  MAX: 5
}
const MESSAGES = {
  MIN: 1,
  MAX: 2
}
const RANDOM_PHOTO_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const RANDOM_PHOTO_DESCRIPTION = [
  'Всё отлично!',
  'Чилю',
  'На отдыхе',
  'Устал'
];
const AUTOR_NAME = [
  'Артём',
  'Алёна',
  'Денис',
  'Илья',
  'Люций',
  'Бобик',
  'Мурзик'
];

const getRandomInt = function (min, max) {
  if (min < 0 || max < 0) return -1;

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = (array) => {
  return array[getRandomInt(1, array.length - 1)]
}

const stringCount = function (text, sign) {
  return text.length <= sign;
}

const createPhoto = (index) => {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(RANDOM_PHOTO_DESCRIPTION),
    likes: getRandomInt(LIKES.MIN, LIKES.MAX),
    comments: createComment(),
  }
}

const createComment = () => {
  let comments = [];
  for (let i = 0; i < getRandomInt(COMMENTS.MIN, COMMENTS.MAX); i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomArrayElement(RANDOM_PHOTO_COMMENTS),
      name: getRandomArrayElement(AUTOR_NAME),
    })
  }
  return comments;
}

const USERS = new Array(RANDOM_PHOTO_COUNT).fill(null).map((curr, index) => createPhoto(index));

console.log(USERS);
