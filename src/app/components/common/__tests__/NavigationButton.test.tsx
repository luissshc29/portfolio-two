import { render, screen } from "@testing-library/react";
import NavigationButton from "../NavigationButton";
import userEvent from "@testing-library/user-event";

describe("Navigation Button", () => {
  it("should scroll to desired screen position on click", async () => {
    const fakeElement = document.createElement("div");
    fakeElement.id = "projects";
    fakeElement.scrollIntoView = jest.fn();
    document.body.appendChild(fakeElement);

    render(<NavigationButton navigateTo="projects">Projects</NavigationButton>);

    await userEvent.click(screen.getByText("Projects"));

    await new Promise((r) => setTimeout(r, 150));

    expect(fakeElement.scrollIntoView).toHaveBeenCalled();
  });

  it("should not break when 'navigateTo' is empty", async () => {
    render(<NavigationButton>Test</NavigationButton>);

    const button = screen.getByText("Test");

    expect(() => {
      userEvent.click(button);
    }).not.toThrow();

    await new Promise((r) => setTimeout(r, 150));
  });

  it("should update url with new hash after scroll", async () => {
    render(<NavigationButton navigateTo="projects">Projects</NavigationButton>);

    await userEvent.click(screen.getByText("Projects"));

    await new Promise((r) => setTimeout(r, 150));

    expect(window.location.hash).toContain("#projects");
  });

  it("should behave correctly when focused with 'Tab' and activated with 'Enter'", async () => {
    const user = userEvent.setup();

    const fakeElement = document.createElement("div");
    fakeElement.id = "projects";
    fakeElement.scrollIntoView = jest.fn();
    document.body.appendChild(fakeElement);

    render(<NavigationButton navigateTo="projects">Projects</NavigationButton>);

    const button = screen.getByRole("button");

    await user.tab();
    expect(button).toHaveFocus();

    await user.click(button);

    await new Promise((r) => setTimeout(r, 150));

    expect(window.location.hash).toContain("#projects");
    expect(fakeElement.scrollIntoView).toHaveBeenCalled();
  });
});
