import React from 'react';
import SearchInput from '../form/SearchInput';


//componentes de presentación (mostrar datos) y componentes contenedores(manejo de informacion)

function ListView({ elements, funcFilterItems }) {
  return (
    <div>
      <SearchInput/>
      <ul>
        {
          // elements.map((nombre, index) => (
          //   <li key={index}>{nombre}</li>
          // ))

          // para validar los nulos al ser nombre null todo el resto de la expresion se cancela
          elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
        }
      </ul>
    </div>
  );
}

export default ListView;
