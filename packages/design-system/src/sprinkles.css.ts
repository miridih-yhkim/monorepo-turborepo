import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { atomicLayer } from "./global.css";
import {
  alignItems,
  all,
  boxSizing,
  cursor,
  flexDirection,
  flexWrap,
  justifyContent,
  position,
  textAlign,
  wordBreak,
  flex,
  verticalAlign,
  display,
} from "./properties/base";
import {
  baseSpacing,
  baseTypography,
  semanticContentsColor,
} from "./properties/semantic";

const baseProperties = defineProperties({
  "@layer": atomicLayer,
  properties: {
    all,
    alignItems,
    appearance: ["none", "auto"],
    boxSizing,
    display,
    justifyContent,
    flexDirection,
    flexWrap,
    position,
    textAlign,
    width: ["auto", "fit-content", "100%"],
    height: ["auto", "fit-content", "100%"],
    overflow: ["hidden"],
    inset: ["0px"],
    padding: ["0px"],
    flex,
    cursor,
    wordBreak,
    verticalAlign,
  },
});

const semantic = defineProperties({
  "@layer": atomicLayer,
  properties: {
    font: baseTypography,
    color: semanticContentsColor,
    marginTop: baseSpacing,
    marginBottom: baseSpacing,
    marginLeft: baseSpacing,
    marginRight: baseSpacing,
  },
  shorthands: {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
  },
});

export const atomic = createSprinkles(baseProperties, semantic);

export type Atomic = Parameters<typeof atomic>[0];
