import { FullLoading } from "component/loading";
import { useMount } from "hook/common";
import { useUnity } from "hook/unity";
import { createContext, ReactNode, useContext } from "react";
import * as auth from "utils/auth";
import { request } from "utils/request";

interface AuthForm {
  username: string;
  password: string;
}
type ContextVal = {
  user: auth.User | null;
  login: (form: AuthForm) => Promise<void>;
  register: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
};
const AuthContext = createContext<ContextVal | undefined>(undefined);
AuthContext.displayName = "AuthContext";

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await request("member", { token: token });
    user = data[0];
  }
  return user;
};
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    isIdle,
    isLoading,
    execute,
    data: user,
    onSucess: setUser,
  } = useUnity<auth.User | null>();
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));
  useMount(() => {
    execute(bootstrapUser());
  });
  if (isLoading || isIdle) {
    return <FullLoading />;
  }
  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthContext中使用");
  }
  return context;
};
