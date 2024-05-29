export const capitalizeFirstLetter = (string: string): string =>
  string.replace(/\b\w/g, (c) => c.toUpperCase());

export const capitalizeOnlyFirstLetter = (string: string): string =>
    string.charAt(0).toUpperCase() + string.slice(1);
