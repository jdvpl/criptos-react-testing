import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const IMG = styled.div`
    margin-top:1rem;
    margin:auto;
    text-align:center;
    img{
        margin-top:2rem;
        width:30%;
    }
`
const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Cotizacion = ({resultado,criptomoneda}) => {
    if(Object.keys(resultado).length===0) return null;

    return ( 
        <ResultadoDiv data-testid="resultadoData">
        <IMG>
            <img src={`https://www.cryptocompare.com${resultado.IMAGEURL}`} alt={resultado.FROMSYMBOL} title={resultado.FROMSYMBOL}/>

            

        </IMG>
            <Precio>El precio de <span>1 {criptomoneda}</span> es: <span>{resultado.PRICE}</span></Precio>
            <Info>El precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualizacion: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
     );
}
Cotizacion.propTypes={
    resultado:PropTypes.object.isRequired,
    criptomoneda:PropTypes.string.isRequired
}
export default Cotizacion;