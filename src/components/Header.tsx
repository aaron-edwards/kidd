/** @jsxImportSource @emotion/react */

import { Heading as H, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      as="header"
      fontFamily="Equinox Regular"
      width="100%"
      display="flex"
      alignItems="baseline"
      gap="1em"
      bg="primary.bg2"
    >
      <H as="h1" size="xl">
        K.I.D.D.
      </H>
      <H as="h2" size="sm" colorScheme="secondary">
        Kerbal Interactive Data Displayer
      </H>
    </Box>
  );
}
