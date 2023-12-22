import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import {
  baseSpacing,
  baseTypography,
  semanticContentsColor,
} from "./properties/semantic";
import { typographyLayer } from "./global.css";
import { wordBreak } from "./properties/base";

const properties = defineProperties({
  "@layer": typographyLayer,
  properties: {
    font: baseTypography,
    color: semanticContentsColor,
    marginTop: baseSpacing,
    marginBottom: baseSpacing,
    marginLeft: baseSpacing,
    marginRight: baseSpacing,
    wordBreak,
  },
  shorthands: {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
  },
});

export const typography = createSprinkles(properties);

export type TypographyProps = Parameters<typeof typography>[0];
