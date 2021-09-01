import "./App.css";
import Player from "./components/Player/Player";
import useWalk from "./hooks/use-walk";

function App() {
  const { step, dir, position, walk } = useWalk(3);
  return (
    <div className="App">
      <Player skin="m2" step={step} dir={dir} position={position} walk={walk} />
    </div>
  );
}

export default App;
