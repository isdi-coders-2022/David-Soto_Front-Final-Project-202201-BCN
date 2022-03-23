import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import RegisterForm from "./RegisterForm";

describe("Given a ReisterForm component", () => {
  describe("When it's render", () => {
    test("Then it should render a heading with the text 'Register Now'", () => {
      const expectedText: string = "Register Now";

      render(
        <Provider store={store}>
          <BrowserRouter>
            {" "}
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
