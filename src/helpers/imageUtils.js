// For images directly in the images folder
export const getImagePath = (imageName) =>
  `${process.env.PUBLIC_URL}/images/${imageName}`;

// For images in the physiotherapist subfolder
export const getPhysioImagePath = (imageName) =>
  `${process.env.PUBLIC_URL}/images/physiotherapists/${imageName}`;
