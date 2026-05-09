import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page1 from "./pages/Page1";
import Home from "./pages/Home";

const App = () => {
  //这里做路由管理
  const [page, setPage] = useState("home");
  return page === "home" ? (
    <Home goToPage1={() => setPage("page1")} />
  ) : (
    <Page1 goHome={() => setPage("home")} />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
