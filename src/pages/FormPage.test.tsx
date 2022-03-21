import { screen, render } from "@testing-library/react";
import CreateHeroPage from "./FormPage";

describe("Given a CreateHeroPage", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Create Hero'", () => {
      const expectedText: string = "Create Hero";

      render(<CreateHeroPage />);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
