import appView from '../views/appView';
import loadPage from '../views/loadPage';
import getData from '../models/getData';

export default async function app() {
  loadPage();

  async function search() {
    const data = await getData();
    appView(data);
    return data;
  }

  const searchButton = document.querySelector('#submit-button');
  // const backButton = document.querySelector('#back');
  // const forwardButton = document.querySelector('#forward');

  searchButton.addEventListener('click', search);
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) search();
  });
}
