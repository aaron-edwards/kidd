import React from "react";

import { ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react";

import App from "../App";
import theme from "../theme";

function AllTheProviders({ children }: { children: React.ReactElement }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

describe("<App />", () => {
  it("should render title", () => {
    const { getByRole } = render(<App />, { wrapper: AllTheProviders });
    expect(getByRole("heading", { level: 1 })).toHaveTextContent("K.I.D.D.");
  });
});
