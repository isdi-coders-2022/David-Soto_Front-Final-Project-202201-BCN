import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Register Now'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            {" "}
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedText: string = "Register Now";

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
