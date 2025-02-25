import { useState, useEffect } from "react";
import { Container, Content, Row, DarkModeButton } from "./styles/styles";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      if (!isNaN(key)) {
        handleAddNumber(key);
      } else if (key === "+") {
        handleSetOperation("+");
      } else if (key === "-") {
        handleSetOperation("-");
      } else if (key === "*") {
        handleSetOperation("*");
      } else if (key === "/") {
        handleSetOperation("/");
      } else if (key === "Enter") {
        handleEquals();
      } else if (key === "Escape") {
        handleOnClear();
      } else if (key === ".") {
        handleAddNumber(".");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === "0" ? num : prev + num));
  };

  const handleSetOperation = (op) => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation(op);
    } else {
      handleEquals();
      setOperation(op);
    }
  };

  const handleSumNumber = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber("0");
    setOperation("");
  };

  const handleMinusNumber = () => {
    const menos = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(menos));
    setFirstNumber("0");
    setOperation("");
  };

  const handleMultiplyNumber = () => {
    const mult = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(mult));
    setFirstNumber("0");
    setOperation("");
  };

  const handleDivideNumber = () => {
    const div = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(div));
    setFirstNumber("0");
    setOperation("");
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case '*':
          handleMultiplyNumber();
          break;
        case '/':
          handleDivideNumber();
          break;
        default:
          break;
      }
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <Content isDarkMode={isDarkMode}>
        <DarkModeButton onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </DarkModeButton>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={() => handleSetOperation("*")} />
          <Button label="/" onClick={() => handleSetOperation("/")} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="." onClick={() => handleAddNumber(".")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleSetOperation("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleSetOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
