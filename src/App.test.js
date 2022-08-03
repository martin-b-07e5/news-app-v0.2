import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); // renderizamos el componente
  const linkElement = screen.getByText(/learn react/i); // obtenemos el rtdo
  expect(linkElement).toBeInTheDocument(); // testeamos rtdo que sea true
  expect(linkElement).toBeInTheDocument(); // testeamos rtdo que sea true es un// testeamos rtdo que sea true
});
