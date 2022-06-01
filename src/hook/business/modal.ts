import { useUrlQueryParam } from "hook/common/url-query";
import { useArticleInfo } from "./article";

export const useArticleModal = () => {
  const [{ addArticle }, setArticleModalOpen] = useUrlQueryParam([
    "addArticle",
  ]);
  const [{ articleId }, setArticleId] = useUrlQueryParam(["articleId"]);
  const { data: editArticle, isLoading } = useArticleInfo(Number(articleId));
  const onOpen = () => setArticleModalOpen({ addArticle: true });
  const onEdit = (id: number) => setArticleId({ articleId: id });
  const onClose = () => {
    setArticleModalOpen({ addArticle: undefined });
    setArticleId({ articleId: undefined });
  };
  return {
    isLoading,
    isOpen: addArticle === "true" || Boolean(articleId),
    editArticle,
    onOpen,
    onClose,
    onEdit,
  };
};
