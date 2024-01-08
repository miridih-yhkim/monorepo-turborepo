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
  display,
} from "./properties/base";
import {
  baseRadius,
  baseSize,
  baseSpacing,
  baseTypography,
  colorStatic,
  semanticContentsColor,
} from "./properties/semantic";

const baseProperties = defineProperties({
  "@layer": atomicLayer,
  properties: {
    all,
    appearance: ["none", "auto"],
    boxSizing,
    display,
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap,
    flex: ["0 0 auto", "1 1 auto", "1 1 0%", "1 1 100%"],
    position,
    textAlign,
    overflow: ["hidden"],
    inset: ["0px"],
    cursor,
    wordBreak,
    verticalAlign: ["middle", "top"],
  },
});

const semantic = defineProperties({
  "@layer": atomicLayer,
  properties: {
    font: baseTypography,
    color: semanticContentsColor,
    backgroundColor: colorStatic,

    gap: baseSpacing,
    marginTop: baseSpacing,
    marginBottom: baseSpacing,
    marginLeft: baseSpacing,
    marginRight: baseSpacing,
    paddingTop: baseSpacing,
    paddingBottom: baseSpacing,
    paddingLeft: baseSpacing,
    paddingRight: baseSpacing,

    borderTopLeftRadius: baseRadius,
    borderTopRightRadius: baseRadius,
    borderBottomLeftRadius: baseRadius,
    borderBottomRightRadius: baseRadius,

    top: baseSpacing,
    left: baseSpacing,
    bottom: baseSpacing,
    right: baseSpacing,

    width: {
      ...baseSize,
      auto: "auto",
      "100%": "100%",
      "fit-content": "fit-content",
    },
    height: {
      ...baseSize,
      auto: "auto",
      "100%": "100%",
      "fit-content": "fit-content",
    },
  },
  shorthands: {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],

    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],

    borderRaidus: [
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
      "borderTopLeftRadius",
      "borderTopRightRadius",
    ],
  },
});

export const atomic = createSprinkles(baseProperties, semantic);

export type Atomic = Parameters<typeof atomic>[0];

export type BaseProperties = typeof baseProperties.styles;
export type SemanticProperties = typeof semantic.styles;
export type SpacingProperties = keyof typeof baseSpacing;
