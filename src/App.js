import React from "react";
import Encabezado from "./Encabezado";
import ComponenteHijo from "./ComponenteHijo";
import { useNumbers } from "./useNumbers";
import "./estilos.css";

const App = () => {
  let arreglo1 = [9, 8, 4, 5, 6, 7, 1, 9];
  let arreglo2 = [1, 2, 5, 8, 9];
  let arreglo3 = [7, 2, 8, 3, 9, 6];
  let arreglo4 = [1, 3, 5, 7, 9];
  let arreglo5 = [1, 3, 4, 5, 7, 9];
  const { numbers } = useNumbers(arreglo5);
  console.log(numbers(arreglo5));
  return (
    <div className="grid">
      <Encabezado />
      {numbers(arreglo5).map((n) => (
        <ComponenteHijo texto={n.replaceAll(",", "")} />
      ))}
    </div>
  );
};

export default App;
