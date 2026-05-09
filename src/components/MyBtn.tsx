import { useState } from "react";

const MyBtn = () => {
  const [cnt, setCnt] = useState(0);
  return <button onClick={() => setCnt(cnt + 1)}>已经点击了{cnt}次</button>;
};

export default MyBtn;
