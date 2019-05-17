/* eslint-disable no-restricted-syntax */
export default function getIds(json) {
  const ids = [];
  for (const item of json.items) {
    ids.push(item.id.videoId);
  }
  return ids.join(',');
}
