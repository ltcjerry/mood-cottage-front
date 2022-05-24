import { ErrorBoundary } from "component/error-boundary";
import { GlobalErrorFallback } from "component/style-component";

import { ProjectList } from "pages/project-list";

function App() {
  return (
    <ErrorBoundary fallbackRender={GlobalErrorFallback}>
      <main className="App">
        <ProjectList />
        {/* <Router>
          <Routes>
            <Route path={"/"} element={<Navigate to="/index" />} />
            <Route path={"/index"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/myHome"} element={<MyHome />} />
            <Route path={"/editArticle"} element={<EditArticle />} />
            <Route path={"/createCenter"} element={<CreateCenter />} />
            <Route path={"/settingInfo"} element={<SettingInfo />} />
            <Route
              path={"/articleDetail/:articleId"}
              element={<ArticleView />}
            />
          </Routes>
        </Router> */}
      </main>
    </ErrorBoundary>
  );
}

export default App;
