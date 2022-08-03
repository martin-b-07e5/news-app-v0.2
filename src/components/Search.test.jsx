// https://github.com/testing-library/react-testing-library
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import { render, screen } from "@testing-library/react";
import { Search } from "./Search";
// import { useSearchParams } from "react-router-dom";

/* comportamiento
Este test solo verifica que se renderice
mostramos un buscador, y cuando buscamos algo » se modifica lo que se muestra
» llamamos userParam de react-router-dom
el btn tiene que estar deshabilitado

mockeamos la dependencia.(si no encuentra la dependencia »
» cada vez que llamamos a este metodo » devolver jest.fn) (jest.fn es algo cualquiera)
jest.mock es una función
Devolvemos un resultado que controlamos
La dependencia externa "react-router-dom" la metemos adentro de la función
  useSearchParams va a retornar un arreglo, que como primer parametro,
    tiene un objeto que retorna una función get
  y como segundo parametro retornamos una función que no me importa que hace, 
    en este caso jest.fn()
Esto da un 100% de cobertura de esta prueba.
 */

// ----------------------------------------------------------------------
jest.mock("react-router-dom", () => ({
  useSearchParams: () => [
    {
      get: () =>
        "analizamos que vamos a devolver " +
        "» Esto devuelve un objeto, que tiene una función, que retorna un string",
    },
    jest.fn(),
  ],
}));
describe("<Search />", () => {
  it("Debe renderizarse", () => {
    render(<Search />); // renderizamos el component
    const buscador = screen.getByRole("search"); // obtenemos el rtdo
    expect(buscador).toBeInTheDocument();
  });
});
// ----------------------------------------------------------------------
jest.mock("react-router-dom", () => ({
  useSearchParams: () => [
    {
      get: () =>
        "analizamos que vamos a devolver " +
        "» Esto devuelve un objeto, que tiene una función, que retorna un string",
    },
    jest.fn(),
  ],
}));
test("Render component Search", () => {
  render(<Search />); // renderizamos el componente
  const result = screen.getByRole("search"); // obtenemos el rtdo
  expect(result).toBeInTheDocument(); // testeamos rtdo que sea true
});
// ----------------------------------------------------------------------
test("button toBeEnabled", () => {
  render(<Search />); // renderizamos el componente
  const result = screen.getByTestId("button"); // obtenemos el rtdo
  expect(result).toBeEnabled(); // testeamos rtdo que sea true
});
