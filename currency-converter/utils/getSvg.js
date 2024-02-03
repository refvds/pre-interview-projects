export const getSvg = async (path) => {
  const response = await fetch(path);
  const svg = await response.text();
  return svg;
};
