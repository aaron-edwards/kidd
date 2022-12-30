import { FunctionInterpolation, Theme } from "@emotion/react";

export type Styled = FunctionInterpolation<Theme>;

export type Body = {
  name: string;
  radius: number;
  mass: number;
  mu: number;
  soi: number;
  rotationPeriod: number;
  atm?: number;
  color: string;
  url?: string;
  orbit?: Orbit;
};
