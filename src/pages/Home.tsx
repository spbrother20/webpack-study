import demoImg from "../img/demo.jpg";

const Home = ({ goToPage1 }: { goToPage1: () => void }) => {
  return (
    <div>
      <h1>你好，世界~</h1>
      <div>
        <button onClick={goToPage1}>跳转到 Page1</button>
      </div>
      <button
        onClick={() => {
          alert("按钮被点击");
          console.log("clicked");
        }}
      >
        点我
      </button>
      <div>
        <img src={demoImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
