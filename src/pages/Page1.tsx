import MyBtn from "../components/MyBtn";
const Page1 = ({ goHome }: { goHome: () => void }) => {
  return (
    <div>
      <h1>Page1</h1>
      <div>
        <button onClick={goHome}>返回首页</button>
      </div>
      <MyBtn />
    </div>
  );
};

export default Page1;
