import axios from "axios";

const API_KEY = "55070456-620b3af2625ed4d2721553348";

export async function fetchImage(query) {
  try {
    const response = await axios.get("https://pixabay.com/api/",{
    params : {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
