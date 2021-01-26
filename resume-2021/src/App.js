import "./App.css";
import Profile from "./Components/Profile/Profile";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="app">
      <div className="topNav"></div>
      <div className="body-container">
        <Profile />

        <Resume />

        <Portfolio />
      </div>
    </div>
  );
}

export default App;
