import { Link, SpaceProps } from "@chakra-ui/react";
import { Link as WouterLink, useRoute } from "wouter";

import { type Route } from "./types";

type Props = {
  route: Route;
} & Pick<SpaceProps, "paddingLeft">;

export default function RouteLink({ route, paddingLeft }: Props) {
  const [isActive] = useRoute(route.link);

  return (
    <Link
      as={WouterLink}
      href={route.link}
      size="lg"
      display="block"
      fontSize="lg"
      paddingLeft={paddingLeft}
      paddingTop="1"
      paddingBottom="1"
      width="100%"
      colorScheme={isActive ? "secondary" : "primary"}
      variant={isActive ? "active" : "default"}
    >
      {route.name}
    </Link>
  );
}
