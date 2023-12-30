import React from "react";
import type { SpinnerColor, SpinnerSize } from "./spinner.css";
import { spinner } from "./spinner.css";

export function Spinner({
  size = "M",
  color = "primary",
}: {
  size: SpinnerSize;
  color: SpinnerColor;
}): React.JSX.Element {
  return (
    <span
      className={spinner({
        color,
        size,
      })}
    />
  );
}
