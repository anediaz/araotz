import { SIZE_LABELS, EXTRAS } from "../constants/constants";

const getFamiliesSizes = () => ({
  def: EXTRAS.large1024,
  big: EXTRAS.large1024,
});

const getMiniFamiliesSizes = () => ({
  def: SIZE_LABELS.SMALL,
  big: SIZE_LABELS.LARGE,
});

const getFamiliesConfigurations = () => [
  { minWidth: 480, cols: 3, margin: 1 },
  { maxWidth: 479, cols: 2, margin: 1 },
];

export { getFamiliesSizes, getMiniFamiliesSizes, getFamiliesConfigurations };
