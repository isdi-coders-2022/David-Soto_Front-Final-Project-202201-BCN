import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Create Hero'", () => {
      const expectedText: string = "Create Hero";

      render(<Form />);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
