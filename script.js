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

function openPopup(a) {
  a.classList.add('popup_opened');
}

function closePopup(a) {
  a.classList.remove('popup_opened');
};

function closePopupButton(a) {
  a.querySelector('.popup__close').addEventListener('click', function() {
    closePopup(a);
  });
}
buttonEditProfile.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
closePopupButton(popupEditProfile);

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
formElement.addEventListener('submit', handleFormSubmit);
buttonAdd.addEventListener('click', function() {
  openPopup(popupAddCard);
  imageCard.value = '';
  nameCard.value = '';
});
closePopupButton(popupAddCard);

function submitCard(evt) {
  evt.preventDefault();
  addElement(imageCard.value, nameCard.value)
  closePopup(popupAddCard);
}
formAddCard.addEventListener('submit', submitCard);

function addElement(imageValue, titleValue) {
  const elementTemplate = document.querySelector('#element-template').content;
  const elementAdded = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = elementAdded.querySelector('.element__image');
  elementImage.setAttribute('src', imageValue);
  elementImage.onclick = function() {
    openPopup(popupImage);
    closePopupButton(popupImage);
    popupImage.querySelector('.popup__image').setAttribute('src', imageValue);
    popupImage.querySelector('.popup__image-caption').textContent = titleValue;
  };
  elementAdded.querySelector('.element__title').textContent = titleValue;
  elementAdded.querySelector('.element__delete').addEventListener('click', function(evt) {
    elementAdded.remove(elementAdded);
  });
  elementAdded.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementsOnline.prepend(elementAdded);
}
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
for (let i = 0; i < initialCards.length; i = i + 1) {
  addElement(initialCards[i].link, initialCards[i].name);
};






