import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID vtTg67S9a43z5YoNevw0grNcvi_9yDodipwROOBKE0g'
  }
});
