import { Spinner } from "@cpdev2/design-system";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;

export const Anatomy = {
  args: {
    size: "M",
    color: "primary",
  },
} satisfies StoryObj<typeof Spinner>;
