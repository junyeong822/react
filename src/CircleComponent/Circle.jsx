const Circle = (props) => {
  const style = { width: "100px", height: "100px", backgroundColor: props.backgroundColor, borderRadius: "9999px", };
  return <div style={style}></div>;
};

export default Circle;
