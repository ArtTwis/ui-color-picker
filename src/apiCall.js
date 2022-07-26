export const getContrastRatio = (backgroundColor, foregroundColor) => {
  return fetch(
    `https://webaim.org/resources/contrastchecker/?fcolor=${foregroundColor}&bcolor=${backgroundColor}&api`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
