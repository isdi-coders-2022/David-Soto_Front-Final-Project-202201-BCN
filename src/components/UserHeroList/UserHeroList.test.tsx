import { render, screen } from "@testing-library/react";
import CreatedHero from "../../interfaces/CreatedHero";
import UserHeroList from "./UserHeroList";

describe("Given a UserHeroList component", () => {
  describe("When it's rendered and recives a CreatedHero", () => {
    test("Then it should render a createdHeroCard", () => {
      const testingHero: CreatedHero[] = [
        {
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
        },
      ];
      const expectedText: string = "TestingHeroName";

      render(<UserHeroList heroes={testingHero}></UserHeroList>);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
