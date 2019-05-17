export default function createVideoURL(ids) {
  const key = 'AIzaSyBwd9fVY3-MfnKuPn326BCeQQ0tGm54WSM';
  const baseURL = 'https://www.googleapis.com/youtube/v3/videos?';
  const url = `${baseURL}key=${key}&id=${ids}&part=snippet,statistics`;
  return url;
}
