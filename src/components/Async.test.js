import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async component", () => {
  test("renders post if request succeeds", async () => {
    //Mocking the network request
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
