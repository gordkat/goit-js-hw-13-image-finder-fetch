const API_KEY = '12950140-ac580548e8e75bad35a7049ea';
const BASE_URL = 'https://pixabay.com/api';

const apiService = {
  searchQuery: '',
  page: 1,
  fetchByName() {
    const searchParams = new URLSearchParams({
      q: this.searchQuery,
      page: this.page,
      per_page: 12,
      key: API_KEY,
    });
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&${searchParams}`;
    return fetch(url).then(response => response.json());
  },
  nextPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};

export default apiService;
