import { Home } from "views/home";
import { Login } from "views/login";
import { MyHome } from "views/author";
import { CreateCenter } from "views/center";
import { ErrorBoundary } from "component/error-boundary";
import { GlobalErrorFallback } from "component/style-component";
import { ArticleView, EditArticle } from "views/article/index";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { SettingInfo } from "views/profile";

function App() {
  return (
    <ErrorBoundary fallbackRender={GlobalErrorFallback}>
      <main className="App">
        <Router>
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
        </Router>
      </main>
    </ErrorBoundary>
  );
}

export default App;
