import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculatorBox}>
        <h1 style={styles.heading}>🧮 hello Calculator</h1>
        <input style={styles.input} type="text" value={input} readOnly />

        <div style={styles.buttonGrid}>
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              style={styles.button}
              onClick={() => (btn === "=" ? handleEqual() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button
            style={{
              ...styles.button,
              gridColumn: "span 4",
              backgroundColor: "#f44336",
              color: "white",
            }}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // Horizontally center the calculator box
    paddingTop: "60px",        // Push it down slightly
    backgroundColor: "#ffffff",
    minHeight: "100vh",        // So it centers well even on small pages
  },
  calculatorBox: {
    width: "400px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    height: "40px",
    fontSize: "24px",
    marginBottom: "10px",
    padding: "5px",
    textAlign: "right",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "20px",
    fontSize: "18px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#e0e0e0",
  },
};

export default App;
