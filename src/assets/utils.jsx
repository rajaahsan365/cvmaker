export const objectIsEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};


export const getDateandTime = () => {
  return new Date().toLocaleString();
};


