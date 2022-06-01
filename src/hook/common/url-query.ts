import { useMemo, useState } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { cleanObject } from "utils/common";
// 获取url参数
export const useUrlQueryParam = <T extends string>(keys: T[]) => {
  const [stateKeys] = useState(keys);
  const [searchParam, setSearchParam] = useSearchParams();
  return [
    useMemo(() => {
      return stateKeys.reduce((prev, key) => {
        return { ...prev, [key]: searchParam.get(key) || "" };
      }, {} as { [key in T]: string });
    }, [searchParam, stateKeys]),
    (params: Partial<{ [key in string]: unknown }>) => {
      const temp = cleanObject({
        ...Object.fromEntries(searchParam),
        ...params,
      }) as URLSearchParamsInit;
      setSearchParam(temp);
    },
  ] as const;
};
