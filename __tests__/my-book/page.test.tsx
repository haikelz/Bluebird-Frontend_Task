import Page from "@/app/my-book/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  it("Should render my-book page", () => {
    render(<Page />);
  });
});
