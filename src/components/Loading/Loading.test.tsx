import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with name 'Loading...'", () => {
      render(<Loading></Loading>);

      const expectedText: string = "Loading...";
      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
