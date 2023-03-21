import "./Components/Css/App.scss";
import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import InputBlock from "./Components/InputBlock";
import ResultBlock from "./Components/ResultBlock";
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [status, setStatus] = useState("website");
  const [patternStatus, setPatternStatus] = useState("L");
  const [qrText, setQrText] = useState("https://github.com/Maxrudyi");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showResults, setShowResults] = useState(true);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  return (
    <div className="App">
      <div className="container">
        <Nav
          setStatus={setStatus}
          status={status}
          windowSize={windowSize}
          showResults={showResults}
          setShowResults={setShowResults}
        />
        <div
          className="container_InputBlock-ResultBlock"
          style={
            windowSize.innerWidth < 481
              ? { display: "block" }
              : { display: "flex" }
          }
        >
          <InputBlock setQrText={setQrText} status={status} API_KEY={API_KEY} />
          <ResultBlock
            patternStatus={patternStatus}
            setPatternStatus={setPatternStatus}
            qrText={qrText}
            setQrText={setQrText}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
