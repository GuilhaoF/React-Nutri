import React, { useEffect, useState } from "react";
import './style.css';

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let urlApi = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(urlApi)
        .then((result) => result.json())
        .then((json) => {
          console.log(json)
          setNutri(json)
        })
    }
    loadApi();
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {
        nutri.map((item) => {
          return (
            <article key={item.id} className='posts'>
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className='capa' />
              <p>{item.subtitulo}</p>
              <a className="botao">Acessar</a>
            </article>
          )
        })
      }
    </div>
  );
}

export default App;
