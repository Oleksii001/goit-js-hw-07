import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryRef = document.querySelector('.gallery');
const createMarkup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
</li>`);

galleryRef.insertAdjacentHTML("beforeend", createMarkup.join(''));


const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});