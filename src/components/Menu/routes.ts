import { type RouteGroup } from "./types";

const routeGroups: RouteGroup[] = [
  {
    name: "Planning",
    routes: [
      { name: "Delta V", link: "/deltav" },
      { name: "Synchronus Orbits", link: "/synchronus-orbits" },
    ],
  },
];

export default routeGroups;

export const routes = routeGroups.flatMap((routeGroup) => routeGroup.routes);
