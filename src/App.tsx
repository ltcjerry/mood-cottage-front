import { ErrorBoundary } from "component/common/error-boundary";
import { GlobalErrorFallback } from "component/loading/style-component";
import { useAuth } from "context/auth-context";
import { AuthView } from "pages/auth";
import { UnauthView } from "pages/unAuth";

function App() {
  const { user } = useAuth();
  return (
    <ErrorBoundary fallbackRender={GlobalErrorFallback}>
      <main className="App">{user ? <AuthView /> : <UnauthView />}</main>
    </ErrorBoundary>
  );
}

export default App;
