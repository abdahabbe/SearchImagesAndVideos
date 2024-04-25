import "./App.css";
import DateTimeComponent from "./components/Clock";
import RandomComments from "./components/Comments";
import RealTimeComponent from "./components/RealTimeComponent";

function App() {
  return (
    <div>
      <DateTimeComponent />
      <RealTimeComponent />
      <RandomComments />
    </div>
  );
}

export default App;
