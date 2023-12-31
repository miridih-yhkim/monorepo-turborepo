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

const properties = defineProperties({
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

export const atomic = createSprinkles(properties);
