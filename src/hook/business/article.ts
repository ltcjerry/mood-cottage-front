import { Article } from "pages/noval/list";
import { cleanObject } from "utils/common";
import { useRequst } from "utils/request";
import { useMutation, useQuery, useQueryClient } from "react-query";

// export const useArtcle = (param?: Partial<Article>) => {
//   const request = useRequst();
//   const { execute, ...remain } = useUnity<Article[]>();
//   const fetchArticle = useCallback(
//     () => request("article", { data: cleanObject(param || {}) }),
//     [param, request]
//   );
//   useEffect(() => {
//     execute(fetchArticle(), { refresh: fetchArticle });
//   }, [param, execute, fetchArticle]);
//   return remain;
// };
// export const useEditArticle = () => {
//   const request = useRequst();
//   const { execute, ...remain } = useUnity();
//   const doAction = (params: Partial<Article>) => {
//     return execute(
//       request("article", {
//         data: params,
//         method: "PATCH",
//       })
//     );
//   };
//   return {
//     doAction,
//     ...remain,
//   };
// };
// export const useAddArticle = () => {
//   const request = useRequst();
//   const { execute, ...remain } = useUnity();
//   const doAction = (params: Partial<Article>) => {
//     return execute(
//       request("article", {
//         data: params,
//         method: "POST",
//       })
//     );
//   };
//   return {
//     doAction,
//     ...remain,
//   };
// };

// 使用react-query重写
export const useArtcle = (param?: Partial<Article>) => {
  const request = useRequst();
  return useQuery<Article[]>(["article", param], () =>
    request("article", { data: cleanObject(param || {}) })
  );
};

export const useEditArticle = () => {
  const request = useRequst();
  const quertClient = useQueryClient();
  return useMutation(
    (params: Partial<Article>) =>
      request(`article/${params.id}`, {
        method: "PATCH",
        data: params,
      }),
    {
      onSuccess: () => quertClient.invalidateQueries("article"),
      async onMutate(target) {},
    }
  );
};

export const useAddArticle = () => {
  const request = useRequst();
  const quertClient = useQueryClient();
  return useMutation(
    (params: Partial<Article>) =>
      request("article", {
        method: "POST",
        data: params,
      }),
    {
      onSuccess: () => quertClient.invalidateQueries("article"),
    }
  );
};

export const useDeleteArticle = () => {
  const request = useRequst();
  const quertClient = useQueryClient();
  return useMutation(
    (id: number) =>
      request(`article/${id}`, {
        method: "DELETE",
      }),
    {
      onSuccess: () => quertClient.invalidateQueries("article"),
    }
  );
};

export const useArticleInfo = (id?: number) => {
  const request = useRequst();
  return useQuery<Article>(
    ["article", { id }],
    () => request("article", { data: { id } }),
    { enabled: !!id }
  );
};
