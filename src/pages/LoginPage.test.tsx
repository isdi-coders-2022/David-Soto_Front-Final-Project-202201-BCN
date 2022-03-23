import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Log in'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            {" "}
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedText: string = "Log in";

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
