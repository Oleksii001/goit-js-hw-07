import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryRef = document.querySelector('.gallery');
const createMarkup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
</li>`);

galleryRef.insertAdjacentHTML("beforeend", createMarkup.join(''));
galleryRef.addEventListener('click', onClick);

let instance;

function onClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
        return;
    }

    instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`, {
        onClose: () => {
            window.removeEventListener("keydown", handlePressEscKey);
        },
        onShow: () => {
            window.addEventListener("keydown", handlePressEscKey);
        },
    });

    instance.show();
}

function handlePressEscKey(evt) {
    if (evt.code !== "Escape") {
        return;
    }
    instance.close();
}


const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});