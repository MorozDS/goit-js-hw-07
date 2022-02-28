import { galleryItems } from './gallery-items.js';
// Change code below this line



const listRef = document.querySelector(".gallery");

const galleryList = galleryItems.map(item => `
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>

`).join('');



listRef.insertAdjacentHTML('beforeend', galleryList);

const gallery =  new SimpleLightbox('.gallery a',
    {
    captionsData: 'alt',
    captionDelay: 250,
    }
);
    


// listRef.addEventListener('click', galleryClick);
// function galleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return
//   };
    
// };

//  new SimpleLightbox('.gallery a',
//     {
//     captionsData: 'alt',
//     captionDelay: 250,
//     }
   
//     );