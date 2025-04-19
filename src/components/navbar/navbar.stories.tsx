import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar.component";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
