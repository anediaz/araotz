import { SIZE_LABELS, EXTRAS } from "../constants/constants";

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const getFamiliesSizes = () => {
  const device = getDeviceType();

  if (device === "mobile") {
    return {
      def: EXTRAS.small320,
      big: EXTRAS.original,
    };
  }
  return {
    def: EXTRAS.large1024,
    big: EXTRAS.large1024,
  };
};

const getMiniFamiliesSizes = () => {
  const device = getDeviceType();
  if (device === "mobile") {
    return {
      def: SIZE_LABELS.SMALL320,
      big: SIZE_LABELS.MEDIUM,
    };
  }
  return {
    def: SIZE_LABELS.SMALL,
    big: SIZE_LABELS.LARGE,
  };
};

const getFamiliesConfigurations = () => [
  { minWidth: 480, cols: 3, margin: 1 },
  { maxWidth: 479, cols: 2, margin: 1 },
];

export { getFamiliesSizes, getMiniFamiliesSizes, getFamiliesConfigurations };
