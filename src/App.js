import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import logo from './img/logo.png'
import Item from './components/Item.js'
import Error from './components/Error.js'

import Loading from './components/Loading.js'
import Axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [personaje, guardarPersonaje] = useState([]);
  const [error, guardarError] = useState(false)
  const [cargando, guardarCargando ] = useState(false);
  const [paginas, guardarPagina ] = useState(1);


  useEffect(() => {
    
    const consultarAPI = async () =>  {

      guardarCargando(true)
      setTimeout( async () => {
        
        try{
          const url = `https://rickandmortyapi.com/api/character/?page=${paginas}`
          const resultado = await Axios.get(url);
          guardarPersonaje(resultado.data.results)
          guardarCargando(false)
          guardarError(false)  
  
        }catch(err){
          guardarError(true)
          guardarCargando(false)
        }
      }, 1000)
    }
    consultarAPI()
    
  // eslint-disable-next-line
  },[paginas])

  //Pagina siguiente funcion
  const siguientePagina = () => {
    
    guardarPagina(paginas + 1)
    console.log(paginas)
  }

  //Pagina atras funcion
  const atrasPagina = () => {
    guardarPagina(Math.max(1, paginas -1))
    console.log(paginas)
  }


  return (
    <Container fluid className="contenedor">
      <Row className="fila__img">
        <Image src={logo} alt="logo-rick-and-morty" fluid className="img"/>
      </Row>
      {error&&(<Error/>)}
      {cargando ? (<Loading/>) : null}

      {!cargando && (
      <Row className="contenedor__botones">
              <Button 
                className="boton" 
                variant="primary"
                onClick={atrasPagina}
              >
                 &larr; Retroceder 
              </Button>
              <Button 
               className="boton"
               variant="primary"
               type="submit"
               onClick={siguientePagina}
              >
                 Siguiente &rarr;    
              </Button>
      </Row>
      )}

      <Row className="fila__card">
        {!cargando && personaje.map((perso, id) => {
          return (

                <Item className="card-item"
                key={id}
                perso={perso}
              />
          )
        })}
      </Row>
    </Container>
  )
}

export default App
