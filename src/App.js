import React,{useEffect, useState} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {
  // state para guardar la moneda
  const [moneda,guardarMoneda]=useState('');
  // state para guardar la cripto
  const [criptomoneda,guardarCriptomoneda]=useState('');
  const [resultado,guardarResultado]=useState({})
  const [cargando,guardarCargando]=useState(false);
  
  useEffect(()=>{

   const contizarCriptomoneda=async()=>{
         // evitamos la ejecucion la primera vez
      if(moneda===''|| criptomoneda==='')return;

      const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado =await axios.get(url);
      // mostrar el spinner
      guardarCargando(true);
      // ocultar el spinner y mostrar el resultado
      setTimeout(()=>{
        guardarCargando(false);

        // guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      },1000);
      
   }
   contizarCriptomoneda()
  },[moneda,criptomoneda]);
  // mostar spinner o resultado
  const componente=(cargando)? <Spinner/>:<Cotizacion resultado={resultado} criptomoneda={criptomoneda}/>
  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="imagen cripto"
        />

      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante </Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        {componente}
      </div>
    </Contenedor>
    
  );
}

export default App;
