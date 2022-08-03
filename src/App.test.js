import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); // renderizamos el componente
  const linkElement = screen.getByText(/News/i); // obtenemos el rtdo
  expect(linkElement).toBeInTheDocument(); // testeamos rtdo que sea true
});
