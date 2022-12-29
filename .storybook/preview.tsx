import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },

  backgrounds: {
    disable: true
  }
};

const withThemeProvider = (Story) => {
  return (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  );
};
export const decorators = [withThemeProvider];
