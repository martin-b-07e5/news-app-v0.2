// https://github.com/testing-library/react-testing-library
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import { render, screen } from "@testing-library/react";
import { Empty } from "./Empty";

describe("<Empty />", () => {
  it("Render component by teacher", async () => {
    render(<Empty />); // renderizamos el componente
    const resultado = screen.getByText("No Results"); // obtenemos el rtdo
    expect(resultado).toBeInTheDocument(); // testeamos rtdo que sea true
  });
});

test("Render component by me", () => {
  render(<Empty />); // renderizamos el componente
  const result = screen.getByText("No Results"); // obtenemos el rtdo
  expect(result).toBeInTheDocument(); // testeamos rtdo que sea true
});

jest.mock("react-router-dom", () => ({
  Link: () => <div></div>,
}));
test("Render Empty getByTestId", () => {
  render(<Empty />); // renderizamos el componente
  const linkElement = screen.getByTestId("empty"); // obtenemos el rtdo
  expect(linkElement).toBeInTheDocument(); // testeamos rtdo que sea true
});
