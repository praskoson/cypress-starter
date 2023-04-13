import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/tWJyDJ04NzMgEwRzD66NZtlf8jIzMDs2',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;
