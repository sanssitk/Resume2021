import "./App.css";
import Profile from "./Components/Profile/Profile";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="topNav" />
      <div className="body-container">
        <Profile />
        <Resume />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
