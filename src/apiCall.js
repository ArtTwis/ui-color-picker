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

export const getSimilarColorShades = (hexCode) => {
  return fetch(`https://www.thecolorapi.com/scheme?hex=${hexCode}&format=json`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
