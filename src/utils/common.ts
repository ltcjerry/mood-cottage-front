// 判断值是否有意义
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

// 对传入的对象过滤空值属性，并返回一个新的对象
export const cleanObject = (object: { [key: string]: unknown }) => {
  const temp = { ...object };
  Object.keys(temp).forEach((key: string) => {
    const value = temp[key];
    if (isVoid(value)) {
      delete temp[key];
    }
  });
  return temp;
};

// 重置路由
export const resetRoute = () => (window.location.href = window.location.origin);
