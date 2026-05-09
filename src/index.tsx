import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import demoImg from "./img/demo.jpg";
import { Page1 } from "./pages/Page1";

function Home({ goToPage1 }: { goToPage1: () => void }) {
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

function App() {
  const [page, setPage] = useState("home");
  return page === "home" ? (
    <Home goToPage1={() => setPage("page1")} />
  ) : (
    <Page1 goHome={() => setPage("home")} />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
