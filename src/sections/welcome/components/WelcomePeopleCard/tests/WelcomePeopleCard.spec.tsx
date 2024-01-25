import { render, screen, cleanup } from "@testing-library/react";
import { expect, test, beforeEach, describe } from "vitest";
import WelcomePeopleCard from "../WelcomePeopleCard";

beforeEach(cleanup);
const mockedPeople = {
  id: "1",
  name: "Alejandro",
  imageUrl: "https://avatars.githubusercontent.com/u/7153498?v=4.jpg",
};
describe("Tag Component", () => {
  test("should render", () => {
    render(<WelcomePeopleCard people={mockedPeople} />);
    const image = screen.getByAltText("Alejandro-image");
    expect(image).toBeDefined();
    const name = screen.getByText("Alejandro");
    expect(name).toBeDefined();
  });
});
