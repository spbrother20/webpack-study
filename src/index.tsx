import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page1 from "./pages/Page1";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

const App = () => {
  //这里做路由管理，否则外界无法通过url的区分来直接访问不同页面
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 goHome={goHome} />} />
      <Route path="/page2" element={<Page2 goHome={goHome} />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
