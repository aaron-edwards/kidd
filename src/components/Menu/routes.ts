import { type RouteGroup } from "./types";

const routes: RouteGroup[] = [
  {
    name: "Planning",
    routes: [
      { name: "Delta V", link: "/planning/deltav" },
      { name: "Synchronus Orbits", link: "/planning/synchronus" },
    ],
  },
];

export default routes;
