import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const creatEl = creatImgGallery()


function creatImgGallery() {
    const imgEl = galleryItems.map((el) => {
    
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`
    }).join('')  

    galleryEl.insertAdjacentHTML('afterbegin', imgEl)
}

const onImgElClick = (event) => {
    event.preventDefault()

    if (event.target.nodeName !== 'IMG') {
    return
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
    
}

galleryEl.addEventListener('click', onImgElClick)