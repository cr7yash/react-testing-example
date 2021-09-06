import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

//Grouping tests or Test Suites

describe("Greeting component", () => {
  //test-1
  test("renders hello world", () => {
    //Arrange
    render(<Greetings />);

    //Act
    //Nothing..

    //Assert
    const linkElement = screen.getByText("Hello World", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test("renders You are good if button is NOT clicked", () => {
    render(<Greetings />);

    const outputElement = screen.getByText("You are good", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders How are you if button IS clicked", () => {
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.getByText("How are you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render you are good if the button click is clicked", () => {
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.queryByText("You are good!", { exact: false });
    expect(outputElement).toBeNull();
  });
});
