import { fetchUrl } from "../constants/constants.js";

async function getPhotos(photoSetId, size) {
  const response = await fetch(fetchUrl(photoSetId, size));
  return response && response.ok
    ? (await response.json()).photoset.photo
    : { Error: `Error while reading photoset=${photoSetId}` };
}

export default {
  getPhotos,
};
