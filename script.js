const buttonEditProfile = document.querySelector('.profile__bt-edit');
const popupEditProfile = document.querySelector('#popup-edit');
const formElement = document.querySelector("#edit-profile");
const nameInput = formElement.querySelector('input[name="name"]');
const nameProfile = document.querySelector('.profile__name');
const jobInput = formElement.querySelector('input[name="description"]');
const jobProfile = document.querySelector('.profile__description');
const elementsOnline = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__bt-add');
const popupAddCard = document.querySelector('#popup-add');
const formAddCard = document.querySelector("#add-card");
const nameCard = formAddCard.querySelector('input[name="card-name"]');
const imageCard = formAddCard.querySelector('input[name="link-image"]');
const popupImage = document.querySelector('#popup-image');
const fullSizeImage = popupImage.querySelector('.popup__image');
const imageCaption = popupImage.querySelector('.popup__image-caption');
const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function closePopupButton(button) {
  button.querySelector('.popup__close').addEventListener('click', function() {
    closePopup(button);
  });
}

function editProfileSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function createElement(imageValue, titleValue) {
  const elementTemplate = document.querySelector('#element-template').content;
  const elementAdded = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = elementAdded.querySelector('.element__image');
  elementImage.setAttribute('src', imageValue);
  elementImage.setAttribute('alt', titleValue);
  elementAdded.querySelector('.element__title').textContent = titleValue;
  elementAdded.querySelector('.element__delete').addEventListener('click', function(evt) {
    elementAdded.remove(elementAdded);
  });
  elementAdded.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementImage.onclick = function() {
    openPopup(popupImage);
    fullSizeImage.setAttribute('src', imageValue);
    fullSizeImage.setAttribute('alt', titleValue);
    imageCaption.textContent = titleValue;
  };
  return elementAdded;
}

function addCard(imageValue,titleValue){
  elementsOnline.prepend( createElement(imageValue, titleValue));
};

function submitCard(evt) {
  evt.preventDefault();
  addCard(imageCard.value, nameCard.value);
  closePopup(popupAddCard);
}
buttonEditProfile.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

formElement.addEventListener('submit', editProfileSubmit);

buttonAdd.addEventListener('click', function() {
  openPopup(popupAddCard);
  imageCard.value = '';
  nameCard.value = '';
});

formAddCard.addEventListener('submit', submitCard);

closePopupButton(popupEditProfile);
closePopupButton(popupAddCard);
closePopupButton(popupImage);

for (let i = 0; i < initialCards.length; i = i + 1) {
  addCard(initialCards[i].link, initialCards[i].name);
};






