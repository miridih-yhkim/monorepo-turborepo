import { createVar, style } from "@vanilla-extract/css";

export const iconUrlVar = createVar();

export const icon = style({
  all: "unset",
  display: "inline-block",
  verticalAlign: "middle",
  maskImage: iconUrlVar,
  maskSize: "contain",
  maskPosition: "no-repeat",
  background: "currentcolor",
  flex: "0 0 auto",
});
