const firstLetterCombinationsForName = {
  A: 0.07,
  B: -0.03,
  C: 0.03,
  D: -0.03,
  E: -0.03,
  F: -0.03,
  G: 0.03,
  H: -0.03,
  I: -0.03,
  J: 0.03,
  K: -0.03,
  L: -0.03,
  M: -0.03,
  N: -0.03,
  O: 0.03,
  P: -0.03,
  Q: 0.03,
  R: -0.03,
  S: 0.02,
  T: 0.03,
  U: -0.03,
  V: 0.06,
  W: -0.02,
  X: 0.03,
  Y: -0.03,
  Z: 0.03,
};
const firstLetterNegative = ['B', 'D', 'E', 'F', 'H', 'I', 'K', 'L', 'M', 'N', 'P', 'R', 'U'];

export const getXTranslateNumber = (
  name: string,
): number => {
    if (!name) return 0;
  const nameFirstLetter = name[0].toUpperCase();

  return firstLetterCombinationsForName[nameFirstLetter];
};

export const getXTranslateMagicForPosition = (other: string): number => {
    if (!other) return 0;
    const stringFirstLetter = other[0].toUpperCase();

    return firstLetterNegative.includes(stringFirstLetter) ? -0.06 : 0;
}
