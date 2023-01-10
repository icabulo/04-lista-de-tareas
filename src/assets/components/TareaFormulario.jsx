import React, { useState } from "react";
import "../stylesheets/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");
  const manejarCambio = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };
  const manejarEnvio = (e) => {
    e.preventDefault();
    // console.log("Enviando formulario");
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    // console.log(tareaNueva);
    props.onSubmit(tareaNueva);
    /* NOTA: este onSubmit NO es un even listener. Es un llamado a la función agregarTarea (definida en el componente ListaDeTareas) que se pasó como prop con el nombre onSubmit */
  };
  return (
    /* este onSubmit SI es un event listener para el form y esta asociado a la funcionalidad manejarEnvio */
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tarea-input"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
