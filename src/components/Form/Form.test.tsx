import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Create Hero'", () => {
      const expectedText: string = "Create Hero";

      render(
        <Provider store={store}>
          <BrowserRouter>
            {" "}
            <Form />
          </BrowserRouter>
        </Provider>
      );

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
