import '@emotion/react';

declare module '@emotion/react' {
  export interface Palette {
    main: string;
    light1: string,
    light2: string,
    light3: string,
    dark1: string,
    dark2: string,
    dark3: string,
    bg1: string,
    bg2: string,
    bg3: string,
  }

  export interface Theme {
    color: {
      primary: Palette,
      secondary: Palette,
      success: Palette,
      error: Palette
    }
  }
}
