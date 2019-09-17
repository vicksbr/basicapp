const dataLayer = window.dataLayer || [];

export const pushDataLayer = (data) => {
  dataLayer.push(data);
};

const clear = () => {
  if (dataLayer.length === 0) { return false; }
  Object.keys(dataLayer).forEach((key) => { dataLayer[0][key] = undefined; });
  dataLayer.splice(0, dataLayer.length);
  return true;
};

export const clearAndPush = (data) => {
  clear();
  pushDataLayer(data);
};
