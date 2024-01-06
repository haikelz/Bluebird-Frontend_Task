import Page from "@/app/wishlist/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Wishlist Page", () => {
  it("Should render wishlist page", () => {
    render(<Page />);
  });
});
