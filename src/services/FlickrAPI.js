import { getPhotosetUrl, getPhotoUrl } from "../constants/constants.js";

async function getPhotoset(photoSetId, size) {
  const response = await fetch(getPhotosetUrl(photoSetId, size));
  return response && response.ok
    ? (await response.json()).photoset.photo
    : { Error: `Error while reading photoset=${photoSetId}` };
}

async function getPhoto(photoId, sizeLabels) {
  const response = await fetch(getPhotoUrl(photoId));
  if(response && response.ok){
    const infos = await response.json()
    return {photoId, sizes: infos.sizes.size.filter(s=>sizeLabels.includes(s.label))}
  }
  else{
    return { Error: `Error while reading photo=${photoId}` }
  }
  /* return response && response.ok
    ? ({photoId, infos: (await response.json().sizes.size.find(s=>s.label===sizeLabel))})
    : { Error: `Error while reading photo=${photoId}` };*/

}

async function getPhotos(photoIds, sizeLabels) {
  const photos = await Promise.all(photoIds.map(id=>getPhoto(id, sizeLabels)))
  return photos
}

export default {
  getPhotos,
};
