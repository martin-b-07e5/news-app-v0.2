// https://github.com/testing-library/react-testing-library
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import { render, screen } from "@testing-library/react";
import { NewsGrid } from "./NewsGrid";

test("Render NewsGrid", () => {
  render(<NewsGrid />); // renderizamos el componente
  const result = screen.getByText(/No Results/); // obtenemos el rtdo (from Empty component)
  expect(result).toBeInTheDocument(); // testeamos rtdo que sea true
});
