import { useNavigate } from "react-router-dom";
import demoImg from "../img/demo.jpg";
import { Button } from "antd";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>你好，世界~</h1>
      <div>
        <Button type="link" onClick={() => navigate("/page1")}>
          去Page1
        </Button>
        <Button type="link" onClick={() => navigate("/page2")}>
          去Page2
        </Button>
      </div>
      <button
        onClick={() => {
          alert("按钮被点击");
          console.log("clicked");
        }}
      >
        弹窗按钮
      </button>
      <div>
        <img src={demoImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
