import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should rendet itselft with the text 'FriendList'", () => {
      render(
        <BrowserRouter>
          <NavigationBar />{" "}
        </BrowserRouter>
      );

      const expectedText = "Global Hero List";

      const nav = screen.getByRole("link", { name: expectedText });

      expect(nav).toBeInTheDocument();
    });
  });
});
