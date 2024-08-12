const Box = (props) => {
  // 1. css를 js화 할때는 중괄호 2개필요
  const boxStyle = { width: "100px", height: "100px", backgroundColor:props.backgroundColor, display:props.display, flexdirection:props.flexdirection};
  return <div style={boxStyle}></div>;
};

export default Box;
