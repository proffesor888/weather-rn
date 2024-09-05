import React from "react";
import Root from "../+html";
import { render } from "@testing-library/react";

describe("<Root />", () => {
  const children = "test";
  test("renders Root with provided children", () => {
    const { getByRole } = render(
      <Root>
        <button>{children}</button>
      </Root>
    );
    getByRole("button");
  });
});
