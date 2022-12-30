import { List, ListItem, Heading } from "@chakra-ui/react";

import RouteLink from "./RouteLink";
import { RouteGroup } from "./types";

type Props = {
  routes: RouteGroup[];
};

export default function ManuContent({ routes }: Props) {
  return (
    <List spacing="4" styleType="none">
      {routes.map((routeGroup) => (
        <ListItem key="name">
          <Heading
            paddingLeft="4"
            textTransform="uppercase"
            textDecoration="underline"
            fontSize="xl"
            colorScheme="grey"
          >
            {routeGroup.name}
          </Heading>
          <List>
            {routeGroup.routes.map((route) => (
              <ListItem key={route.name}>
                <RouteLink route={route} paddingLeft="8" />
              </ListItem>
            ))}
          </List>
        </ListItem>
      ))}
    </List>
  );
}
