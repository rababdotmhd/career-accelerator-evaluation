import react from "react";
import logo from "./logo.png";
import mode from "./mode.png";
import profile from "./profile.png";
import "./App.css";

const App = () => {
  return (
    <div>
    
      <div className="header">
        <li className="left-nav">
          <img src={logo} className="App-logo" alt="logo" />
        </li>
        <li className="pages">
          <li className="pagelink">HOME</li>
          <li className="pagelink">JOKES</li>
          <li className="pagelink">ABOUT</li>
        </li>
        <li className="right-nav">
          <li>
            <img src={mode} className="mode" alt="mode" />
          </li>
          <li className="profile-div">
            <li className="profile-name">PROFILE</li>
            <li>
              <img src={profile} className="profile" alt="profile" />
            </li>
          </li>
        </li>
      </div>
      <div className="Home">
        <center>
          <div className="prompt">
            <li>Predict the gender of </li>
            <li>a person based on your name.</li>
          </div>
          <div>
            <input
              className="input"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>          
          <div className="result" id="result">
            <p>THERE IS NO ENOUGH INFORMATION.</p>
          </div>
        </center>
      </div>
    </div>
  );
};

export default App;