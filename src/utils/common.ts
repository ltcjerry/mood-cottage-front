export const cleanObject = (object: { [key in string]: unknown }) => {
  const temp = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (!value) {
      Reflect.deleteProperty(temp, key);
    }
  });
  return temp;
};
