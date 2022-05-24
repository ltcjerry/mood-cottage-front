import { useEffect, useState } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [tempValue, setTempValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setTempValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return tempValue;
};

export const useArray = <T>(data: T[]) => {
  const [value, setValue] = useState(data);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const temp = [...value];
      temp.splice(index, 1);
      setValue(temp);
    },
  };
};
