import { ErrorBoundary } from "component/common/error-boundary";
import { GlobalErrorFallback } from "component/loading/style-component";
import { useAuth } from "context/auth-context";
import { AuthView } from "pages/auth";
import { UnauthView } from "pages/unAuth";

function App() {
  const { user } = useAuth();
  return (
    <ErrorBoundary fallbackRender={GlobalErrorFallback}>
      <main className="App">
        {user ? <AuthView /> : <UnauthView />}

        {/* <Router>
          <Routes>
            <Route path={"/"} element={<Navigate to="/index" />} />
            <Route path={"/index"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/myHome"} element={<MyHome />} />
            <Route path={"/editArticle"} element={<EditArticle />} />
            <Route path={"/createCenter"} element={<CreateCenter />} />
            <Route path={"/settingInfo"} element={<SettingInfo />} />
            <Route path={"/articleDetail/:articleId"} element={<ArticleView />}
            />
          </Routes>
        </Router> */}
      </main>
    </ErrorBoundary>
  );
}

export default App;
