import { useState } from "react";
import "./App.css";
import LogoFCC from "./assets/components/LogoFCC";
import ListaDeTareas from "./assets/components/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFCC />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        {/* <Tareas texto="Aprender React" completada={true} /> */}
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
