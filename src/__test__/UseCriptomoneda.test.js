import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Formulario from "../components/Formulario";
import { MONEDAS } from "../__mocks__/criptomonedas";
it("<UseCriptomenda/>", () => {
  render(<Formulario />);
  // verificar la cantidad de children del select
  const selectMoney = screen.getByTestId("select-money");
  expect(selectMoney.children.length).toEqual(MONEDAS.length + 1);
});
