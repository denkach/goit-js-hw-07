import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');
const bodyEl = document.querySelector('body');

const markup = galleryItems.map(item => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      />
    </a>
    </div>`
}).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);
galleryEl.addEventListener('click', onGalleryElClick);

function onGalleryElClick(e) {
    e.preventDefault();


    const isClickOnImage = e.target.nodeName === 'IMG';
    
    if (!isClickOnImage) {
        return
    }

    const modal = basicLightbox.create(
        `<div class="modal"><img src="${e.target.dataset.source}" width="800" height="600"></div>
`)
    modal.show();

    document.addEventListener('keydown', onDocumentKeyDown);

    function onDocumentKeyDown(e) {
        const isKeyEscape = e.key === 'Escape';

        if (!isKeyEscape) {
            return;
        }
        document.removeEventListener('keydown', onDocumentKeyDown);
        modal.close();
    }
}




