/* eslint-disable no-restricted-syntax */
export default function getViews(json) {
  const views = [];
  for (const item of json.items) {
    views.push({
      videoId: item.id,
      views: item.statistics.viewCount,
    });
  }
  return views;
}
