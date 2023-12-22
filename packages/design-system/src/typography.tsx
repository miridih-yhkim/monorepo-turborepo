import React from "react";
import clsx from "clsx";
import type { TypographyProps } from "./typography.css";
import { typography } from "./typography.css";
import { atomic } from "./sprinkles.css";
import type { PolymorphicForwardRefComponent } from "./polymorphic";

export const Typography = React.forwardRef(function Typography(
  {
    as: ElementType = "span",
    color,
    font,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    wordBreak,
    ...props
  },
  ref,
) {
  const styles = clsx(
    typography({
      color,
      font,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX,
      marginY,
      wordBreak,
    }),
    atomic({ all: "revert" }),
  );

  return <ElementType {...props} className={styles} ref={ref} />;
}) as PolymorphicForwardRefComponent<"span", TypographyProps>;
