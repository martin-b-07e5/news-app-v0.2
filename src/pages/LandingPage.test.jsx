// https://github.com/testing-library/react-testing-library
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import { render, screen } from "@testing-library/react";
import { Search } from "../components/Search";

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
