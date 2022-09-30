import React from 'react';

//componentes de presentación (mostrar datos) y componentes contenedores(manejo de informacion)

function ListView({ elements, funcFilterItems }) {
  return (
    <div>
      <input type="text" onChange={(ev) => funcFilterItems(ev.target.value)} />
      <ul>
        {
          elements.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))

          // para validar los nulos al ser nombre null todo el resto de la expresion se cancela
          // elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
        }
      </ul>
    </div>
  );
}

export default ListView;
