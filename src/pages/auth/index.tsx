import { useAuth } from "context/auth-context";
import { ProjectList } from "pages/project-list";

export const AuthView = () => {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectList />
      <button onClick={() => logout()}>退出</button>
    </div>
  );
};
