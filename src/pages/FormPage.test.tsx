import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import CreateHeroPage from "./FormPage";

describe("Given a CreateHeroPage", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Create Hero'", () => {
      const expectedText: string = "Create Hero";

      render(
        <Provider store={store}>
          <CreateHeroPage />
        </Provider>
      );

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
