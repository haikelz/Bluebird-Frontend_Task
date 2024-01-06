import Page from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  it("Should render home page", () => {
    render(<Page />);

    // test heading in banner section
    const heading = screen.getByTestId("bluebird-heading");
    expect(heading).toBeInTheDocument();
  });
});
