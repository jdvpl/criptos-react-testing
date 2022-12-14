import {readFileSync} from 'fs';
import path from 'path';
export const criptos=JSON.parse(readFileSync(path.join(__dirname,'api.json')).toString());
export const MONEDAS = [
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
