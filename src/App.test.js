// https://github.com/testing-library/react-testing-library
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import { render, screen } from "@testing-library/react";
import App from "./App";
import AboutUs from "./App";

test("renders News", () => {
  render(<App />); // renderizamos el componente
  const linkElement = screen.getByText(/News/i); // obtenemos el rtdo
  expect(linkElement).toBeInTheDocument(); // testeamos rtdo que sea true
});

test("renders AboutUs", () => {
  render(<AboutUs />); // renderizamos el componente
  const linkElement = screen.getByText(/News/i); // obtenemos el rtdo
  expect(linkElement).toBeInTheDocument(); // testeamos rtdo que sea true
});
