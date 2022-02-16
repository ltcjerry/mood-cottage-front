import { useState } from "react";

export const useArray = <T>(initArr: T[]) => {
  const [value, setValue] = useState(initArr);
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
