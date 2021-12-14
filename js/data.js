import * as util from './util.js';

const RANDOM_PHOTO_COUNT = 25;
const LIKES = {
  MIN: 25,
  MAX: 200
}
const COMMENTS = {
  MIN: 1,
  MAX: 5
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

const createPhoto = () => {
  const id = util.randomIntegerGenerator(1, RANDOM_PHOTO_COUNT)();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: util.getRandomArrayElement(RANDOM_PHOTO_DESCRIPTION),
    likes: util.getRandomInt(LIKES.MIN, LIKES.MAX),
    comments: createComment(),
  }
}

const createComment = () => {
  const comments = [];
  for (let i = 0; i < util.getRandomInt(COMMENTS.MIN, COMMENTS.MAX); i++) {
    const id = util.randomIntegerGenerator(1, 999)();
    comments.push({
      id: id,
      avatar: `img/avatar-${util.getRandomInt(1, 6)}.svg`,
      message: util.getRandomArrayElement(RANDOM_PHOTO_COMMENTS),
      name: util.getRandomArrayElement(AUTOR_NAME),
    })
  }
  return comments;
}

export const USERS = new Array(RANDOM_PHOTO_COUNT).fill(null).map(() => createPhoto());
