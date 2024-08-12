import { useState } from "react";

const Count = () => {
  // react : props + state(상태)
  // useState(초기값)
  const [num, setNum] = useState(10);
  const [fruits, setFruits] = useState("🍒");

  const changeFruits = () => {
    setFruits(fruits == "🍒" ? "🍓" : "🍒");
  };

  const changeNum = () => {
    setNum(15);
  };

  return (
    <>
      <div onClick={changeNum}>{num}</div>
      <div onClick={changeFruits}>{fruits}</div>
    </>
  );
};

export default Count;
