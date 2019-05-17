import createSearchURL from './createSearchURL';
import createVideoURL from './createVideoURL';
import getInfo from './getInfo';
import getIds from './getIds';
import getViews from './getViews';


export default async function getData() {
  let nextPageToken = '';
  const query = document.getElementById('search-input').value;
  const url = createSearchURL(nextPageToken, query);

  const response = await fetch(url)
    .catch(error => window.console.error(error));
  const json = await response.json();
  // eslint-disable-next-line prefer-destructuring
  nextPageToken = json.nextPageToken;

  const infoArr = getInfo(json);
  const ids = getIds(json);

  const response2 = await fetch(createVideoURL(ids))
    .catch(error => window.console.error(error));
  const json2 = await response2.json();
  const views = getViews(json2);
  const fullData = [infoArr, views];
  return fullData;
}
