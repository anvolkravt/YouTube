import './app-view.css';

export default function appView(data) {
  const temp = document.querySelector('#videoItemTemplate');
  const wrapper = document.querySelector('.slider');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data[0].length; i += 1) {
    const newVideo = document.importNode(temp.content, true);

    const preview = newVideo.querySelector('.preview-pic');
    preview.setAttribute('src', data[0][i].image);

    const titleLink = newVideo.querySelector('.video__title-link');
    titleLink.setAttribute('href', `http://youtube.com/watch?v=${data[1][i].videoId}`);
    titleLink.innerHTML = data[0][i].title;

    const author = newVideo.querySelector('.video__description-author');
    author.innerHTML = `${data[0][i].author}`;

    const uploadDate = newVideo.querySelector('.video__description-upload-date');
    uploadDate.innerHTML = data[0][i].uploadDate.substr(0, 10);

    const views = newVideo.querySelector('.video__description-views');
    views.innerHTML = data[1][i].views;

    const description = newVideo.querySelector('.video__description-about');
    description.innerHTML = data[0][i].description;

    fragment.appendChild(newVideo);
  }
  wrapper.appendChild(fragment);
}
