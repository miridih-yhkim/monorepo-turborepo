import type { baseLight } from "./base-light";
import type { componentLight } from "./component-light";
import type { semanticLight } from "./semantic-light";

type Theme =
  | keyof typeof baseLight
  | keyof typeof semanticLight
  | keyof typeof componentLight;

export const token = (key: Theme): string => {
  return `var(--${key})`;
};
