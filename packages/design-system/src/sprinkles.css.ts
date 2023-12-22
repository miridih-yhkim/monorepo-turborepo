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
} from "./properties/base";

const properties = defineProperties({
  "@layer": atomicLayer,
  properties: {
    all,
    alignItems,
    appearance: ["none", "auto"],
    boxSizing,
    display: ["flex", "inline-flex", "none", "block"],
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
    flex: ["0 0 auto", "1 1 auto", "1 1 0%", "1 1 100%"],
    cursor,
    wordBreak,
  },
});

export const atomic = createSprinkles(properties);
