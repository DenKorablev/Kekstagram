import {isEscape} from './util.js';

const COMMENTS_COUNT = 5;
const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');

const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');

const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');

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

const showCommentsLoader = (sliceComments, comments) => {
  if (comments.length > sliceComments.length) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
}

const showCommentsList = (visibledComments, comments) => {
  const sliceComments = comments.slice(0, visibledComments);
  commentList.innerHTML = '';
  socialCommentsCount.textContent = `${sliceComments.length} из ${comments.length} комментариев`;
  renderComments(sliceComments);
  showCommentsLoader(sliceComments, comments);
}

export const onShowPicture = ({url, likes, description, comments}) => {
  let visibledComments = COMMENTS_COUNT;
  document.body.classList.add('modal-open');
  bigPictureImage.src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  showCommentsList(visibledComments, comments);

  document.addEventListener('keydown', onPopupEscKeydown);

  commentsLoader.addEventListener('click', () => {
    visibledComments += COMMENTS_COUNT;
    showCommentsList(visibledComments, comments)
  });

  bigPicture.classList.remove('hidden');
}

bigPictureClose.addEventListener('click', onClosePicture);

