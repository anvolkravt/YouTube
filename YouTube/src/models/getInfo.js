/* eslint-disable no-restricted-syntax */
export default function getInfo(json) {
  const info = [];
  for (const item of json.items) {
    info.push({
      image: item.snippet.thumbnails.medium.url,
      title: item.snippet.title,
      author: item.snippet.channelTitle,
      uploadDate: item.snippet.publishedAt,
      description: item.snippet.description,
    });
  }
  return info;
}
