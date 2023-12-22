import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { atomicLayer } from "./global.css";

const properties = defineProperties({
  "@layer": atomicLayer,
  properties: {
    all: ["revert", "unset", "initial"],
    alignItems: ["stretch", "center", "flex-start", "flex-end"],
    appearance: ["none", "auto"],
    boxSizing: ["border-box", "content-box"],
    display: ["flex", "inline-flex", "none", "block"],
    justifyContent: ["space-between", "center", "flex-start", "flex-end"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["wrap", "nowrap"],
    position: ["relative", "absolute", "sticky"],
    textAlign: ["center", "left", "right"],
    width: ["auto", "fit-content", "100%"],
    height: ["auto", "fit-content", "100%"],
    overflow: ["hidden"],
    inset: ["0px"],
    padding: ["0px"],
    flex: ["0 0 auto", "1 1 auto", "1 1 0%", "1 1 100%"],
    cursor: ["auto", "pointer", "not-allowed", "inherit"],
    wordBreak: ["normal", "break-all", "keep-all", "break-word"],
  },
});

export const atomic = createSprinkles(properties);
