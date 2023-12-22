import { globalLayer, globalStyle } from "@vanilla-extract/css";
import { baseLight as blt } from "./token/base-light";
import { baseDark as bdt } from "./token/base-dark";
import { semanticLight as slt } from "./token/semantic-light";
import { semanticDark as sdt } from "./token/semantic-dark";
import { componentLight as clt } from "./token/component-light";
import { componentDark as cdt } from "./token/component-dark";

const bizhows = globalLayer("bizhows");

const light = globalLayer({ parent: bizhows }, "light");
const baseLight = globalLayer({ parent: light }, "base");
const semanticLight = globalLayer({ parent: light }, "semantic");
const componentLight = globalLayer({ parent: light }, "component");

const dark = globalLayer({ parent: bizhows }, "dark");
const baseDark = globalLayer({ parent: dark }, "base");
const semanticDark = globalLayer({ parent: dark }, "semantic");
const componentDark = globalLayer({ parent: dark }, "component");

export const atomicLayer = globalLayer({ parent: bizhows }, "atomic");
export const typographyLayer = globalLayer({ parent: bizhows }, "typography");

function themeToCSS(theme: Record<string, string>): Record<string, string> {
  return Object.entries(theme).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      acc[`--${key}`] = value;
      return acc;
    },
    {},
  );
}

globalStyle(`[data-ds-theme="light"]`, {
  "@layer": {
    [baseLight]: themeToCSS(blt),
    [semanticLight]: themeToCSS(slt),
    [componentLight]: themeToCSS(clt),
  },
});

globalStyle(`[data-ds-theme="dark"]`, {
  "@layer": {
    [baseDark]: themeToCSS(bdt),
    [semanticDark]: themeToCSS(sdt),
    [componentDark]: themeToCSS(cdt),
  },
});
