import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ErrorPage } from "./ErrorPage";

test("Se debe visualizar un mensaje de error", () => {
  render(<ErrorPage />); // renderizamos el componente
  const message = screen.getByText(/Error 404/i); // obtenemos el rtdo
  expect(message).toBeInTheDocument(); // testeamos rtdo que sea true
});
