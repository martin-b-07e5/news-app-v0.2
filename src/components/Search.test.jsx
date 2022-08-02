import { render, screen } from "@testing-library/react";
import { useSearchParams } from "react-router-dom";
import { Search } from "./Search";

// comportamiento
// mostramos un buscador, y cuando buscamos algo »
// » se modifica lo que se muestra » llamamos userParam de react-router-dom
// el btn tiene que estar deshabilitado

// mockeamos la dependencia.(si no encuentra la dependencia »
// » cada vez que llamamos a este metodo » devolver jest.fn) (jest.fn es algo cualquiera)
// jest.mock es una función
// devolvemos un resultado que controlamos
jest.mock("react-router-dom", () => ({
  useSearchParams: () => [
    {
      get: () =>
        "analizamos que vamos a devolver " +
        "» Esto devuelve un objeto que tiene una función que retorna un string",
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

// describe("<Empty />", () => {
//   it("Debe renderizarse", async () => {
//     render(<Empty />); // renderizamos el componente
//     const resultado = screen.getByText("No Results"); // obtenemos el rtdo
//     expect(resultado).toBeInTheDocument(); // testeamos rtdo que sea true
//   });
// });

// test("Search 'No Results' by me", () => {
//   render(<Empty />); // renderizamos el componente
//   const result = screen.getByText("No Results"); // obtenemos el rtdo
//   expect(result).toBeInTheDocument(); // testeamos rtdo que sea true
// });
