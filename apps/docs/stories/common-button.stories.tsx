import { CommonButton } from "@cpdev2/design-system";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: CommonButton,
  tags: ["autodocs"],
} satisfies Meta<typeof CommonButton>;

export default meta;

export const Anatomy = {
  args: {
    children: "hello world",
    shape: "round",
    size: "M",
    buttonType: "outline",
  },
} satisfies StoryObj<typeof CommonButton>;
