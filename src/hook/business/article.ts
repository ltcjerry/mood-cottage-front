import { useUnity } from "hook/unity";
import { Article } from "pages/noval/list";
import { useCallback, useEffect } from "react";
import { cleanObject } from "utils/common";
import { useRequst } from "utils/request";

export const useArtcle = (param?: Partial<Article>) => {
  const request = useRequst();
  const { execute, ...remain } = useUnity<Article[]>();
  const fetchArticle = useCallback(
    () => request("article", { data: cleanObject(param || {}) }),
    [param, request]
  );
  useEffect(() => {
    execute(fetchArticle(), { refresh: fetchArticle });
  }, [param, execute, fetchArticle]);
  return remain;
};

export const useEditArticle = () => {
  const { execute, ...remain } = useUnity();
  const request = useRequst();
  const doAction = (params: Partial<Article>) => {
    return execute(
      request("article", {
        data: params,
        method: "PATCH",
      })
    );
  };
  return {
    doAction,
    ...remain,
  };
};

export const useAddArticle = () => {
  const { execute, ...remain } = useUnity();
  const request = useRequst();
  const doAction = (params: Partial<Article>) => {
    return execute(
      request("article", {
        data: params,
        method: "POST",
      })
    );
  };
  return {
    doAction,
    ...remain,
  };
};
