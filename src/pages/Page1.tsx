import { Button } from "antd";
import MyBtn from "../components/MyBtn";
const Page1 = ({ goHome }: { goHome: () => void }) => {
  return (
    <div>
      <h1>Page1</h1>
      <div>
        <Button type="link" onClick={goHome}>
          去首页
        </Button>
      </div>
      <MyBtn />
    </div>
  );
};

export default Page1;
