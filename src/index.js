import "./index.css";

// 页面容器
const app = document.createElement("div");
app.id = "app-view";
document.body.appendChild(app);
import demoImg from "./img/demo.jpg";

function renderHome() {
  app.innerHTML = `
    <h1>你好，世界~</h1>
    <button id="btn">点我</button>
    <div style="margin: 20px 0">
      <button id="goto-page1">跳转到 Page1</button>
    </div>
    <div>
      <img src="${demoImg}" alt="" />
    </div>
  `;
  document.getElementById("btn").onclick = () => {
    alert("按钮被点击");
    console.log("clicked");
  };
  document.getElementById("goto-page1").onclick = renderPage1;
}

function renderPage1() {
  app.innerHTML = `
    <h1>页面1</h1>
    <h2>Page 1 JS 加载成功</h2>
    <button id="back-home">返回首页</button>
  `;
  document.getElementById("back-home").onclick = renderHome;
}

// 默认渲染首页
renderHome();
