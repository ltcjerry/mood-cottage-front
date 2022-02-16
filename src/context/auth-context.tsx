import { User } from "types/login";
import React, { ReactNode } from "react";
import * as auth from "context/auth-provider";
import { server } from "utils/server";
import { useMount } from "hook/use-mount";
import { useAsync } from "hook/use-async";
import { GlobalErrorFallback, GlobalLoading } from "component/style-component";

interface AuthForm {
  username: string;
  password: string;
}
// 刷新界面时需要自动重新获取当前用户信息，初始化过程
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await server("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = "AuthContext";

// context全局组件, children为App组件及子节点
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    startRequest,
    setData: setUser,
  } = useAsync<User | null>();
  // 函数式编程 point free
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));
  // 每次刷新界面时这个组件都会重新执行
  useMount(() => {
    startRequest(bootstrapUser());
  });

  if (isIdle || isLoading) {
    return <GlobalLoading />;
  }

  if (isError) {
    return <GlobalErrorFallback error={error} />;
  }

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, logout, register }}
    />
  );
};

// 自定义hook方便直接使用context内容，而不用每次导入再使用
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  } else {
    return context;
  }
};
