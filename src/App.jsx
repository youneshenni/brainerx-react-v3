import PropTypes from "prop-types";
export default function App() {
  function incrementClicks() {
    const clickCountElement = document.getElementById("clickCount");
    clickCountElement.textContent = parseInt(clickCountElement.textContent) + 1;
  }
  function resetClicks() {
    const clickCountElement = document.getElementById("clickCount");
    clickCountElement.textContent = 0;
  }

  function decrementClicks() {
    const clickCountElement = document.getElementById("clickCount");
    clickCountElement.textContent = parseInt(clickCountElement.textContent) - 1;
  }
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>
        Your buttons have been clicked <span id="clickCount">0</span> times
      </p>
      <Button onClick={incrementClicks} alertText="WELCOME">
        Increment
      </Button>
      <Button onClick={decrementClicks} alertText="SE">
        Decrement
      </Button>
      <Button onClick={resetClicks} alertText="SE">
        Reset
      </Button>
    </div>
  );
}

function Button(props) {
  const { children, onClick } = props;
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
