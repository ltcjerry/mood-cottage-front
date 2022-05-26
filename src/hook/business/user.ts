import { useUnity } from "hook/unity";
import { useEffect } from "react";
import { cleanObject } from "utils/common";
import { useRequst } from "utils/request";

interface User {
  id: number;
  name: string;
}
export const useUser = (param?: Partial<User>) => {
  const request = useRequst();
  const { execute, ...remain } = useUnity<User[]>();
  useEffect(() => {
    execute(request("user", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);
  return remain;
};
