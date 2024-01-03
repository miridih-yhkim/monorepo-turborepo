import React from "react";
import type { Atomic } from "./sprinkles.css";
import { atomic } from "./sprinkles.css";
import type { PolymorphicForwardRefComponent } from "./polymorphic";

export const Typography = React.forwardRef(function Typography(
  {
    as: ElementType = "span",
    font,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    textAlign,
    color,
    wordBreak,
    position,
    ...props
  },
  ref,
) {
  return (
    <ElementType
      {...props}
      className={atomic({
        all: "revert",
        font,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginX,
        marginY,
        textAlign,
        color,
        wordBreak,
        position,
      })}
      ref={ref}
    />
  );
}) as PolymorphicForwardRefComponent<
  "span",
  Pick<
    Atomic,
    | "font"
    | "marginX"
    | "marginY"
    | "marginBottom"
    | "marginTop"
    | "marginLeft"
    | "marginRight"
    | "margin"
    | "textAlign"
    | "color"
    | "wordBreak"
    | "position"
  >
>;
