import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import demoImg from "./img/demo.jpg";

function Home({ goToPage1 }) {
  return (
    <div>
      <h1>你好，世界~</h1>
      <button
        onClick={() => {
          alert("按钮被点击");
          console.log("clicked");
        }}
      >
        点我
      </button>
      <div style={{ margin: "20px 0" }}>
        <button onClick={goToPage1}>跳转到 Page1</button>
      </div>
      <div>
        <img src={demoImg} alt="" />
      </div>
    </div>
  );
}

function Page1({ goHome }) {
  return (
    <div>
      <h1>页面1</h1>
      <h2>Page 1 JS 加载成功</h2>
      <button onClick={goHome}>返回首页</button>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");
  return page === "home" ? (
    <Home goToPage1={() => setPage("page1")} />
  ) : (
    <Page1 goHome={() => setPage("home")} />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
