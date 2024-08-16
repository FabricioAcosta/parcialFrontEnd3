import React, { useState } from "react";
import Formulario from "./Formulario";
import Card from "./Card";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (input1.trim().length < 3) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
      return;
    }

    
    if (input2.trim().length < 3) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
      return;
    }

    
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <Formulario
        input1={input1}
        setInput1={setInput1}
        input2={input2}
        setInput2={setInput2}
        handleSubmit={handleSubmit}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && <Card nombre={input1} apellido={input2} />}
    </div>
  );
}

export default App;
