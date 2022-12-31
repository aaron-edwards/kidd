/** @jsxImportSource @emotion/react */

import { Heading as H, Text, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header">
      <H as="h1" fontSize="4xl">
        K.I.D.D.
        <Text as="span" fontSize="xs" colorScheme="secondary" marginLeft="4">
          Kerbal Interactive Data Displayer
        </Text>
      </H>
    </Box>
  );
}
