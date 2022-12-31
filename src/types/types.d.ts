import { FunctionInterpolation, Theme } from "@emotion/react";

export type Styled = FunctionInterpolation<Theme>;

export type Orbit = {
  orbits: string;
  semiMajorAxis: number;
};

export type Body = {
  name: string;
  radius: number;
  mass: number;
  mu: number;
  soi: number;
  rotationPeriod: number;
  atm?: number;
  color: string;
  orbit?: Orbit;
};

type System = {
  body: Body;
  satelites: System[];
};
