import { useUnity } from "hook/unity";
import { Article } from "pages/my-article/list";
import { useEffect } from "react";
import { cleanObject } from "utils/common";
import { useRequst } from "utils/request";

export const useArtcle = (param?: Partial<Article>) => {
  const request = useRequst();
  const { execute, ...remain } = useUnity<Article[]>();
  useEffect(() => {
    execute(request("article", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);
  return remain;
};
