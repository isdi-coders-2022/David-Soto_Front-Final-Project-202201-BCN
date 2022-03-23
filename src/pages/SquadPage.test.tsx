import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import SquadPage from "./SquadPage";

describe("Given a SquadPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Your Squad'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            {" "}
            <SquadPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedText: string = "Your Squad";

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
