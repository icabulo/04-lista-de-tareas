# React-FreeCodeCamp-ESP

Aprendiendo React con el canal de YouTube de FreeCodeCamp en español. Los proyectos siguen el video: https://www.youtube.com/watch?v=6Jfk8ic3KVk.

## 04 Lista de tareas

Crear una lista de tareas: tutorial de https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=19603s.

1.1 Qué aprendí:

- Importar íconos desde react-icons.
  - El ícono importado es un componente (AiOutlineCloseCircle), ver que al ser componente el className se pasa como un prop el ícono y en el css se ajustan los atributos de estilo.

_Asociar el ícono al componente Tarea:_

```js
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tareas({ props}) {
  return (
    <AiOutlineCloseCircle className="tarea-icono" />
    {/* NOTA: className se pasa como un prop al coponente AiOutlineCloseCircle*/}
  );
}
```

_Dar estilo a componente importado:_

```css
.tarea-icono {
  width: 25px;
  height: 25px;
  margin: 5px;
}
```

- Utilizar fragments <code>(<> </>)</code> para agrupar los elementos de un componente sin crear un div.

```js
return (
  <>
    <TareaFormulario />
    <div className="contenedor">
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} />
      ))}
    </div>
  </>
);
```

- Event listener onChange para guardar lo que se digita en el input de agregar una tarea.

```js
function TareaFormulario() {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  return (
    <form>
      <input onChange={manejarCambio} />
    </form>
  );
}
```

- Event listener onSubmit: cuando se envia el fomulario.
  - Observar con **cuidado** que en el código se usa la palabra _**onSumbit**_ para cosas direfentes:
    - **Para enviar la función agregarTarea** como un prop al componente TareaFormulario. (ver componente ListaDeTareas)
    - **Para llamar la función** que crea una _nueva tarea y actualizar el estado_, enviando la información de la tarea como un **parámetro de la función**.
      - Pasar funciones como props a otros componentes y en este componente hijo utilizar esas funciones para actualizar (a través del parámetro de la función) el estado que vive en el componente padre.
      - **NOTA: esto es muy útil** porque así se puede actualizar el estado que no está definido en el mismo componente que llama la función. Es decir, actualiza el estado definido en el componente padre mediante un llamado en el componente hijo.
    - Tercero: **como event listener** para manejar el envio del formulario.
  - También aprendí el uso de preventDefault(), para que el formulario (o la aplicación no se vuelva a cambiar cuando se envíe el formulario).
  - Ver que el evento **no** se ejecuta con un _onClic del botón_, sino en el **evento** _onSubmit_ del elemento _form_ (aunque al final ocurre cuando se da clic en el botón).

```js
function TareaFormulario(props) {
  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
    /* NOTA: este onSubmit NO es un even listener. Es un llamado a la función agregarTarea*/
  };

  return (
    /* este onSubmit SI es un event listener*/
    <form onSubmit={manejarEnvio}>
      <button>Agregar Tarea</button>
    </form>
  );
}
```

- Crear ids con paquere UUID.

```js
import { v4 as uuidv4 } from "uuid";
```

- Con el metodo map se debe pasar un key a cada componente que se crea y para esto se usa tarea.id.
  - Normalmente también se pasa la propiedad id al componente. con esto pareciera que se está pasando doble el prob pero no es así ya que _el key no se puede acceder con los props_.

```js
const [tareas, setTareas] = useState([]);

{
  tareas.map((tarea) => (
    <Tarea
      key={tarea.id}
      id={tarea.id}
      texto={tarea.texto}
      completada={tarea.completada}
      eliminarTarea={eliminarTarea}
      completarTarea={completarTarea}
    />
  ));
}
```

- Agregar secuencia de colores con pseudoclase nth-child.

```css
.tarea-contenedor:nth-child(3n + 1) {
  background-color: #1b1b32;
}

.tarea-contenedor:nth-child(3n + 2) {
  background-color: #2a2a40;
}

.tarea-contenedor:nth-child(3n + 3) {
  background-color: #3b3b4f;
}
```
