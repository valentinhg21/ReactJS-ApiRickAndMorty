import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import logo from './img/logo.png'
import Item from './components/Item.js'
import './App.css'

const Container = styled.div`
  background: #0B0A1F;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`
const ContainerLogo = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 575.98px) {
    width: 350px;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 390px;

  }




`;
const Img = styled.img`
  width: 700px;


  @media (max-width: 575.98px) {

    width: 350px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 560px;

  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 650px;

   }

   /* Extra Large */
  @media (min-width: 1200px) {
    width: 800xp;
  }
`;
const ContainerButton = styled.div`
  margin-top: 10rem;
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 575.98px) {
    width: 100%;
    height: 50px;
    justify-content: center;
  };
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 81%;
    height: 50px;
    justify-content: flex-end;
  };
  /* Ipads */
  @media (min-width: 768px) and (max-width: 991.98px) {
        width: 95%;
        height: 50px;
        justify-content: flex-end;
   }
   /* Desktops */
  @media (min-width: 992px) and (max-width: 1199.98px) {
      width: 75%;
   }
  /* Extra Large */
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

const Button = styled.button`
background-color:#135B87;
border:1px solid #135B87;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-size:23px;
padding:16px 49px;
text-decoration:none;
margin-right: 2rem;
outline:none;

&:hover {
  background:#082434;
  text-decoration:none;
  border:1px solid white;
}

@media (max-width: 575.98px) {
  font-size:16px;
  tex-align: center ;
  margin-right: 1rem;
}

@media (min-width: 576px) and (max-width: 767.98px) {
    font-size:18px;
}

`;




const ContainerItems = styled.div`
  width: 90%;
  height: auto;
  display: grid;
  grid-template-columns:  1fr 1fr ;

  /* Celulares inferiores  */
  @media (max-width: 575.98px) {

    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
  };
  /* Celulares superiores  */
  @media (min-width: 576px) and (max-width: 767.98px) {

    width: 85%;
    display: grid;
    grid-template-columns: 1fr;
  }
  /* Ipads */
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr;

   }
  /* Desktops */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 75%;
    display: grid;
    grid-template-columns: 1fr;

  }
  @media (min-width: 1200px)  {
    max-width: 100%;
    width:100%;


   }

`;


const App = () => {

  const [character, setCharacter ] = useState([])
  const [page, setPage ] = useState(1);
  const [loading, setLoading ] = useState(true)


  useEffect(() => {
    //Funcion para conectar y obtener datos de la API
    const obtenerDatos = async () => {
      //Pongo el loading en true
      setLoading(true)
      setTimeout( async () => {

          try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const data = await response.json()
            //Guardo la info
            setCharacter(data.results);
            setLoading(false);
          }
          catch (error) {
          console.log(error)
        }
      }, 1000)
    }
    obtenerDatos()
  }, [page])




  return (
    <Container>
      <ContainerLogo>
        <Img src={logo} alt="logo-rick-and-morty" />
      </ContainerLogo>

        {!loading &&(
          <ContainerButton>
            <Button type="submit" onClick={() => setPage(Math.max(1, page - 1))}>Prev</Button>
            <Button type="submit" onClick={() => setPage(page + 1)}>Next</Button>
          </ContainerButton>
        )}
      {loading
        ?
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
         : null}
      <ContainerItems>
        {!loading &&
            character.map((chars, id) => {
            return <Item key={id} chars={chars} />;
            })}
      </ContainerItems>
    </Container>
  )
}

export default App
