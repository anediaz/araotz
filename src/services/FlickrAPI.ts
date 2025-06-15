import { getPhotosetUrl, getPhotoUrl } from "../constants/constants";

export async function getPhotoset(photoSetId: string, size: string) {
  const response = await fetch(getPhotosetUrl(photoSetId, size));
  return response && response.ok
    ? (await response.json()).photoset.photo
    : { Error: `Error while reading photoset=${photoSetId}` };
}

async function getPhoto(photoId: string, sizeLabels: string[]) {
  const response = await fetch(getPhotoUrl(photoId));
  if (response && response.ok) {
    const infos = await response.json()
    return { photoId, sizes: infos.sizes.size.filter((s: { label: string }) => sizeLabels.includes(s.label)) }
  }
  else {
    return { Error: `Error while reading photo=${photoId}` }
  }

}

export async function getPhotos(photoIds: string[], sizeLabels: string[]) {
  const photos = await Promise.all(photoIds.map(id => getPhoto(id, sizeLabels)))
  return photos
}