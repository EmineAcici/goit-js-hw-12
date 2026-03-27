import { getSearchQuery } from './searchForm';
import { updateGallery, clearGallery } from './imageGallery';
import { fetchImage } from './fetchApi';

// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

const loadingMessage = document.querySelector('.loading-text');

getSearchQuery(async (query) => {
  clearGallery();
  loadingMessage.classList.remove('is-hidden');

  try {
    const data = await fetchImage(query);

    const images = data.hits;

    if (!images || images.length === 0) {
      iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
    } else {
      updateGallery(images);
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
});
