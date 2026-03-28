import axios from "axios";

const API_KEY = "55070456-620b3af2625ed4d2721553348";

export async function fetchImage(query,page=1) {
  try {
    const response = await axios.get("https://pixabay.com/api/",{
    params : {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 40,
  },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
