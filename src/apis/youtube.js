import axios from 'axios';

const KEY = 'AIzaSyAbpCdzUEvzLiv3sTJhaVP-A05XC2V4Yd4';

export default axios.create( {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});