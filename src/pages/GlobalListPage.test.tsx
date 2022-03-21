import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import GlobalListPage from "./GlobalListPage";

describe("Given a GlobalListPage", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Global Hero List'", () => {
      render(
        <Provider store={store}>
          <GlobalListPage />
        </Provider>
      );

      const expectedText: string = "Global Hero List";

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
