import { Typography } from "@cpdev2/design-system";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

export const Anatomy = {
  args: {
    font: "body_2XL",
    color: "contents_default",
    marginY: "60",
    children: "hello world",
    wordBreak: "break-all",
  },
} satisfies StoryObj<typeof Typography>;
