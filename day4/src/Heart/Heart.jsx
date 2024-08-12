/* 빈하트 & 꽉찬 하트를 props true 주면 꽉찬하트 나오고 false 주면 빈하트 나오도록 컴포넌트 */

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Heart = (props) => {
  const [isLove, setIsLove] = useState(false);
  const changeLove = () => {
    setIsLove(!isLove);
  };
  return (
    <div onClick={changeLove}>
      {isLove ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}
    </div>
  );
};

export default Heart;
