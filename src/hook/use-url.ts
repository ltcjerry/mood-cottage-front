/**
 * @description 返回url中的参数
 * @author jerry
 */

import { useMemo, useState } from "react";
import { cleanObject } from "utils/common";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

export const useUrlQueryParam = <T extends string>(keys: T[]) => {
  const [stateKeys] = useState(keys);
  const [searchParams] = useSearchParams();
  const setSearchParams = useSetUrlSearchParam();
  return [
    useMemo(
      () =>
        subset(Object.entries(searchParams), stateKeys) as {
          [key in string]: string;
        },
      [searchParams, stateKeys]
    ),
    (params: Partial<{ [key in T]: unknown }>) => {
      return setSearchParams(params);
    },
  ] as const;
};

export const useSetUrlSearchParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (params: { [key in string]: unknown }) => {
    const temp = cleanObject({
      ...Object.fromEntries(searchParams),
      ...params,
    }) as URLSearchParamsInit;
    return setSearchParams(temp);
  };
};
