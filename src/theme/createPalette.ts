import { Palette } from "@emotion/react";

export default function createPallette(
  hue: number,
  saturation: number = 100
): Palette {
  const createColor = (l: number) => `hsl(${hue}, ${saturation}%, ${l}%)`;

  return {
    main: createColor(50),
    light1: createColor(60),
    light2: createColor(70),
    light3: createColor(80),
    dark1: createColor(40),
    dark2: createColor(30),
    dark3: createColor(20),

    bg1: createColor(7.5),
    bg2: createColor(5),
    bg3: createColor(2.5),
  };
}
