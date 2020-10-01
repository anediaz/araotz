const API_KEY = "febb771e0ff0730eea9758f8931d7462";
// const USER_ID = "24033063@N00";
export const getPhotosetUrl = (photosetId, extras) =>
  `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&extras=${extras}&format=json&nojsoncallback=true&method=flickr.photosets.getPhotos&photoset_id=${photosetId}`;
export const getPhotoUrl= photoId =>
`https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`

  export const EXTRAS = {
  small320: {
    url: "url_n",
    width: "width_n",
    height: "height_n",
  },
  original: { url: "url_o", width: "width_o", height: "height_o" },
  medium500: { url: "url_m", width: "width_m", height: "height_m" },
  medium800: { url: "url_c", width: "width_c", height: "height_c" },
  large1024: { url: "url_l", width: "width_l", height: "height_l" },
};

export const SIZE_LABELS = {
  LARGE: 'Large',
  SMALL: 'Small',
  SMALL320: "Small 320",
  MEDIUM: 'Medium'
}

export const ERROR_TYPES = {
  flickrLoading: "Photo loading from Flickr",
};

// Google Analytics
export const googleTrackId = "UA-179302321-1";
