import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Login'", () => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );

      const expectedText: string = "Login";

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
