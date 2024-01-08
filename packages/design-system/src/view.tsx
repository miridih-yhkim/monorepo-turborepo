import React from "react";
import type { Atomic } from "./sprinkles.css";
import { atomic } from "./sprinkles.css";

export const View = React.forwardRef<
  React.ElementRef<"div">,
  Atomic & {
    children?: React.ReactNode;
  }
>(function View({ children, ...props }, ref) {
  return (
    <div className={atomic(props)} ref={ref}>
      {children}
    </div>
  );
});
