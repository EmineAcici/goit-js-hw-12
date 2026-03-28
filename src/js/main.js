import { getSearchQuery } from './searchForm';
import { updateGallery, clearGallery } from './imageGallery';
import { fetchImage } from './fetchApi';

// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

const loadingMessage = document.querySelector('.loading-text');
const loadMoreBtn = document.querySelector('.load-more-button');

let currentQuery = '';
let currentPage;

async function handleFetch() {
  try {
    loadingMessage.classList.remove('is-hidden');
    loadMoreBtn.classList.add('is-hidden');

    const data = await fetchImage(currentQuery, currentPage);
    const images = data.hits;
    const totalHits = data.totalHits;

    if (!images || images.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    updateGallery(images);

    if (totalHits > currentPage * 40) {
      loadMoreBtn.classList.remove('is-hidden');
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Something went wrong while connecting to the server. Please try again later!',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    loadingMessage.classList.add('is-hidden');
  }
}

getSearchQuery(async query => {
  currentQuery = query;
  currentPage = 1;
  clearGallery();
  loadMoreBtn.classList.add('is-hidden');
  loadingMessage.classList.remove('is-hidden');

  await handleFetch();
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  await handleFetch();

  const { height: cardHeight } = document
    .querySelector('.result-gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
});
