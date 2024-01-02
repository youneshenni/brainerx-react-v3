import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./App.css";

const buttonStyles = {
  backgroundColor: "blue",
};
export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [secondClick, setSecondClick] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
    return () => {
      console.log("useEffect cleanup");
    };
  }, [clickCount]);
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Your buttons have been clicked {clickCount} times</p>
      <h3>Total clicks: {secondClick}</h3>
      <Button onClick={() => setClickCount(clickCount + 1)} alertText="WELCOME">
        Increment
      </Button>
      <Button onClick={() => setSecondClick(secondClick + 1)} alertText="SE">
        Decrement
      </Button>
      <Button
        style={{ color: "yellow" }}
        onClick={() => setClickCount(0)}
        className="SE"
      >
        Reset
      </Button>
    </div>
  );
}

function Button(props) {
  const { children, onClick, style, className } = props;
  return (
    <button
      style={{ ...buttonStyles, ...style }}
      onClick={() => {
        onClick();
      }}
      className={className}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
