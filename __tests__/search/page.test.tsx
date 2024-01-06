import Page from "@/app/search/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Search Page", () => {
  it("Should render search page", () => {
    render(<Page />);
  });
});
