import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@cpdev2/design-system";
import { icon_add } from "@cpdev2/iconography";

const meta = {
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;

export const Anatomy = {
  args: {
    iconName: icon_add,
  },
} satisfies StoryObj<typeof IconButton>;
