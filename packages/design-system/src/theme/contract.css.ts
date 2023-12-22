import { createGlobalThemeContract } from "@vanilla-extract/css";
import { baseLight } from "../token/base-light";
import { semanticLight } from "../token/semantic-light";
import { componentLight } from "../token/component-light";

export const contract = createGlobalThemeContract({
  base: baseLight,
  semantic: semanticLight,
  component: componentLight,
});
