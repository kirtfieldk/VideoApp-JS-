import axios from 'axios';

const KEY = 'AIzaSyCLlzMLWDdYlIYMFrCQU78UrhF8ozVBi68';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

