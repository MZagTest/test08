import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const item = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
  )
  .join("");

list.insertAdjacentHTML("afterbegin", item);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
