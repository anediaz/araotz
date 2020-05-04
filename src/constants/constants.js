const API_KEY = "febb771e0ff0730eea9758f8931d7462";
// const USER_ID = "114481456@N05";
export const fetchUrl = (photosetId, extras) =>
  `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&extras=${extras}&format=json&nojsoncallback=true&method=flickr.photosets.getPhotos&photoset_id=${photosetId}`;
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

export const ERROR_TYPES = {
  flickrLoading: "Photo loading from Flickr",
};
