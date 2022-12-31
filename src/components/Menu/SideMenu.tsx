import { Box } from "@chakra-ui/react";

import MenuContent from "./MenuContent";
import routeGroups from "./routes";

export default function NavMenu() {
  return (
    <Box aria-label="Main Navigation" as="nav">
      <MenuContent routes={routeGroups} />
    </Box>
  );
}
