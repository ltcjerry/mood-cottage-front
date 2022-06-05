import { QueryKey, useQueryClient } from "react-query";
type callbackFn = (target: any, old?: any[]) => any[];
export const useOptimistic = (queryKey: QueryKey, callback: callbackFn) => {
  const queryClient = useQueryClient();
  return {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
    async onMutate(target: any) {
      const prevItems = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (prev?: any[]) => {
        return callback(target, prev);
      });
      return { prevItems };
    },
    onError(error: any, curItem: any, context: any) {
      queryClient.setQueryData(queryKey, context.previousItems);
    },
  };
};

export const useDeleteConfig = (queryKey: QueryKey) =>
  useOptimistic(
    queryKey,
    (target, prevData) =>
      prevData?.filter((item) => item.id !== target.id) || []
  );
export const useEditConfig = (queryKey: QueryKey) =>
  useOptimistic(
    queryKey,
    (target, prevData) =>
      prevData?.map((item) =>
        item.id === target.id ? { ...item, ...target } : item
      ) || []
  );
export const useAddConfig = (queryKey: QueryKey) =>
  useOptimistic(queryKey, (target, prevData) =>
    prevData ? [...prevData, target] : []
  );
