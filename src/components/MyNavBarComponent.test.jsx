// https://github.com/testing-library/react-testing-library
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import { render, screen } from "@testing-library/react";
import { MyNavBarComponent } from "./MyNavBarComponent";

jest.mock("react-router-dom", () => ({
  Link: () => <div></div>,
}));
test("Render MyNavBarComponent", () => {
  render(<MyNavBarComponent />);
  const linkElement = screen.getByTestId("my-navbar-component"); // obtenemos el rtdo
  expect(linkElement).toBeInTheDocument(); // testeamos rtdo que sea true
});
