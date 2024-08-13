import Box from "./BoxComponent/Box";
import Circle from "./Circle/Circle";

function App() {
  // Box 컴포넌트 만들고 w:100px h:100px 배경색:blue 클릭하면 red -> blue -> red
  return (
    <div>
      <Box></Box>
      <Circle></Circle>
    </div>
  );
}

export default App;