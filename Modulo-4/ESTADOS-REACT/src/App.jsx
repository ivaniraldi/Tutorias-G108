import "./App.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';
import ColorForm from './components/ColorForm';

function App() {
  const [cuenta2, setCuenta2] = useState(0);

  const sumar = () => {
    setCuenta2(cuenta2 + 1);
  };

  const restar = () => {
    setCuenta2(cuenta2 - 1);
  };

  return (
    <>
      <section id="center">
        <div>

        <button className="counter" onClick={sumar}>
          +
        </button>
        <button className="counter" onClick={restar}>
          -
        </button>
        <p>Contador: {cuenta2}</p>
        </div>

    {/*<LoginForm/>*/}

    <br />
    {/*<RegisterForm></RegisterForm>*/}

      <ColorForm></ColorForm>
      </section>

    </>
  );
}

export default App;
