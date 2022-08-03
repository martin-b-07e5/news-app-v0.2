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
