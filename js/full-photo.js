import {isEscape} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');

const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsCount = socialCommentsCount.querySelector('.comments-count');

const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');

commentsLoader.classList.add('hidden');
socialCommentsCount.classList.add('hidden');
const commentList = document.querySelector('.social__comments');

const onPopupEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    onClosePicture();
  }
};

const onClosePicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  commentList.innerHTML = '';
};

const renderComments = (comments) => {
  comments.forEach((comment) => {
    const template = `<li class="social__comment">
                    <img
                        class="social__picture"
                        src="${comment.avatar}"
                        alt="${comment.name}"
                        width="35" height="35">
                    <p class="social__text">${comment.message}</p>
                </li>`;
    commentList.insertAdjacentHTML('beforeend', template);
  });
};

export const onShowPicture = ({url, likes, description, comments}) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentList.innerHTML = '';

  bigPictureImage.src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  commentsCount.textContent = comments.length;

  renderComments(comments);

  document.addEventListener('keydown', onPopupEscKeydown);
}

bigPictureClose.addEventListener('click', onClosePicture);

