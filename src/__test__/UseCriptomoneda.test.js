import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Formulario from "../components/Formulario";
import { MONEDAS,criptos } from "../__mocks__/criptomonedas";
import axios from 'axios';
const mockAxios=axios;
const guardarMoneda=jest.fn()
const guardarCriptomoneda=jest.fn()
it("<UseCriptomenda/>", async() => {
  mockAxios.get=jest.fn().mockResolvedValue({
    data:criptos
  });
  render(<Formulario
      guardarMoneda={guardarMoneda}
      guardarCriptomoneda={guardarCriptomoneda}
    />);
  // verificar la cantidad de children del select
  const selectMoney = screen.getByTestId("select-money");
  expect(selectMoney.children.length).toEqual(MONEDAS.length + 1);
  // verfivar la cantidad de monendas de la api
  const options=screen.findAllByTestId('option-cripto');
  expect(await options).toHaveLength(100);
  expect(mockAxios.get).toHaveBeenCalled();
  expect(mockAxios.get).toHaveBeenCalledTimes(1);

  // seleccionar bitcoin y usd
  userEvent.selectOptions(screen.getByTestId('select-money'),'COP')
  userEvent.selectOptions(screen.getByTestId('select-cripto'),'BTC')
  userEvent.click(screen.getByTestId('btnSubmit'))
  // validar que las funciones sean llamadas
  expect(guardarMoneda).toHaveBeenCalled();
  expect(guardarMoneda).toHaveBeenCalledTimes(1);
  expect(guardarCriptomoneda).toHaveBeenCalled();
  expect(guardarCriptomoneda).toHaveBeenCalledTimes(1);

  expect(screen.queryByTestId('resultadoData')).toBeInTheDocument();
});
