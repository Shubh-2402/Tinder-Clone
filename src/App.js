import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      {/* <SwipeButtons /> */}
    </div>
  );
}

export default App;
