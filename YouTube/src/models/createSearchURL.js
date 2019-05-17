export default function createSearchURL(nextPageToken, query) {
  const key = 'AIzaSyBwd9fVY3-MfnKuPn326BCeQQ0tGm54WSM';
  const baseURL = 'https://www.googleapis.com/youtube/v3/search?';
  const url = `${baseURL}pageToken=${nextPageToken}&key=${key}&maxResults=15&part=snippet&type=video&q=${query}`;
  return url;
}
