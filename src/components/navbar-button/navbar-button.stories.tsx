import type { Meta, StoryObj } from "@storybook/react";
import { NavbarButton } from "./navbar-button.component";

const meta: Meta<typeof NavbarButton> = {
  title: "Components/NavbarButton",
  component: NavbarButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavbarButton>;

export const Default: Story = {
  args: {
    label: "Home",
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    label: "Home",
    isActive: true,
  },
};
