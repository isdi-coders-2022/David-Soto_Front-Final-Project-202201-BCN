import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it's render", () => {
    test("Then it should render a heading with the text 'Log in'", () => {
      const expectedText: string = "Log in";

      render(
        <Provider store={store}>
          <BrowserRouter>
            {" "}
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
