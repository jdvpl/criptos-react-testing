import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";
import Error from "./Error";
import PropTypes from "prop-types";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Formulario = ({ mensaje, guardarCriptomoneda, guardarMoneda }) => {
  // state del listado de criptomonedad
  const [listadocripto, guardarCriptomonedas] = useState([]);
  const [error, guardarError] = useState(false);
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "AUD", nombre: "Dólar Australiano" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "CAD", nombre: "Dolar Canadiense" },
    { codigo: "PEN", nombre: "Sol Peruano" },
    { codigo: "JPY", nombre: "Yen Japones" },
    { codigo: "RUB", nombre: "Rublo Ruso" },
    { codigo: "VEF", nombre: "Bolívar Venezolano" },
    { codigo: "BOB", nombre: "Boliviano" },
    { codigo: "CLP", nombre: "Peso chileno" },
    { codigo: "ARS", nombre: "Peso argentino" },
    { codigo: "BRL", nombre: "Real brasileño" },
    { codigo: "CHF", nombre: "Franco suizo" },
    { codigo: "UYU", nombre: "Peso uruguayo" },
  ];
  // utilizar usemoneda
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);

  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listadocripto
  );
  // ejecutar el llamado a la API

  useEffect(() => {
    const ConsultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";
      // consultarlo con axios
      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    };
    ConsultarAPI();
  }, []);

  // cuando el usuario hace onsubmit
  const cotizarMoneda = (e) => {
    e.preventDefault();
    // validacion si estan llenos
    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      return;
    }
    // pasar los datos al componente principal
    guardarError(false);
    guardarCriptomoneda(criptomoneda);
    guardarMoneda(moneda);
  };
  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Debes completar todos los campos" /> : null}

      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" data-testid="btnSubmit" />
    </form>
  );
};
Formulario.propTypes = {
  guardarMoneda: PropTypes.func,
  guardarCriptomoneda: PropTypes.func,
};
export default Formulario;
