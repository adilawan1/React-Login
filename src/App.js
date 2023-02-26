import logo from "./logo.svg";
import "./App.css";
import Loginpage from "./Components/Loginpage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>You can test the app by logging in</p>
        <Loginpage />
      </header>
    </div>
  );
}

export default App;
