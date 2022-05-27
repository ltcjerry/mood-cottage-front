import { FullLoading } from "component/loading";
import { useMount } from "hook/common";
import { useUnity } from "hook/unity";
import { ReactNode, useCallback } from "react";
import * as auth from "utils/auth";
import { request } from "utils/request";
import * as authStore from "store/auth.slice";
import { useDispatch, useSelector } from "react-redux";

export interface AuthForm {
  username: string;
  password: string;
}

export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await request("member", { token: token });
    user = data[0];
  }
  return user;
};
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isIdle, isLoading, execute } = useUnity<auth.User | null>();
  const dispatch: (...args: any[]) => Promise<auth.User> = useDispatch();
  useMount(() => {
    execute(dispatch(authStore.bootStrap()));
  });
  if (isLoading || isIdle) {
    return <FullLoading />;
  }
  return <div>{children}</div>;
};

export const useAuth = () => {
  const dispatch: (...args: any[]) => Promise<auth.User> = useDispatch();
  const user = useSelector(authStore.selectUser);
  const login = useCallback(
    (form: AuthForm) => dispatch(authStore.login(form)),
    [dispatch]
  );
  const register = useCallback(
    (form: AuthForm) => dispatch(authStore.register(form)),
    [dispatch]
  );
  const logout = useCallback(() => dispatch(authStore.logout()), [dispatch]);
  return {
    user,
    login,
    register,
    logout,
  };
};
