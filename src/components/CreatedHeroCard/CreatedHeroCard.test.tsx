import { render, screen } from "@testing-library/react";
import CreatedHero from "../../interfaces/CreatedHero";
import CreatedHeroCard from "./CreatedHeroCard";

describe("Given a CreatedHeroCard component", () => {
  describe("When it's called", () => {
    test("Then it should render itself with heading 'Name: TestingHero'", () => {
      const testingHero: CreatedHero = {
        creator: "me",
        alias: "TestingHero",
        name: "TestingHeroName",
        powerstats: {
          intelligence: 1,
          strength: 1,
          speed: 1,
          durability: 1,
          power: 1,
          combat: 1,
        },
      };
      const expectedText: string = "TestingHeroName";

      render(<CreatedHeroCard hero={testingHero}></CreatedHeroCard>);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
