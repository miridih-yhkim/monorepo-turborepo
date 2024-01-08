import { createVar, style } from "@vanilla-extract/css";
import { atomic } from "./sprinkles.css";

export const iconUrlVar = createVar();

export const icon = style([
  atomic({
    all: "unset",
    display: "inline-block",
    verticalAlign: "middle",
    flex: "0 0 auto",
  }),
  style({
    maskImage: iconUrlVar,
    maskSize: "contain",
    maskRepeat: "no-repeat",
  }),
]);
