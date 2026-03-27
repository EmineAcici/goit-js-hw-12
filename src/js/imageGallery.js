const gallery = document.querySelector('.result-gallery');

// Dokümantasyonda belirtilen import
import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.result-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function updateGallery(images) {
  if(!images || images.length === 0) return;
  
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="result-item">
            <a href="${largeImageURL}" class="picture-link">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" class="item-image" />
            </a>
            <div class="picture-text">
                <p class="text"><span class="bold-text">Likes</span> ${likes}</p>
                <p class="text"><span class="bold-text">Views</span> ${views}</p>
                <p class="text"><span class="bold-text">Comments</span> ${comments}</p>
                <p class="text"><span class="bold-text">Downloads</span> ${downloads}</p>
            </div>
        </li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}
