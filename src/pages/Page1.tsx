const Page1 = ({ goHome }: { goHome: () => void }) => {
  return (
    <div>
      <h1>页面1</h1>
      <h2>Page 1 JS 加载成功</h2>
      <button onClick={goHome}>返回首页</button>
    </div>
  );
};

export default Page1;
