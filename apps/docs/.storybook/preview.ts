import type { Preview } from "@storybook/react";
import { withTheme } from "./decorator";

import "@cpdev2/design-system/dist/index.css";

const preview = {
  decorators: [withTheme],
} satisfies Preview;

export default preview;
