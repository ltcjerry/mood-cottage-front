import { useMemo } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { cleanObject } from "utils/common";
// 获取url参数
export const useUrlQueryParam = <T extends string>(keys: T[]) => {
  const [searchParam, setSearchParam] = useSearchParams();
  return [
    useMemo(() => {
      return keys.reduce((prev, key) => {
        return { ...prev, [key]: searchParam.get(key) || "" };
      }, {} as { [key in T]: string });
    }, [searchParam]),
    (params: Partial<{ [key in string]: unknown }>) => {
      const temp = cleanObject({
        ...Object.fromEntries(searchParam),
        ...params,
      }) as URLSearchParamsInit;
      console.log("test", params, temp);
      setSearchParam(temp);
    },
  ] as const;
};
