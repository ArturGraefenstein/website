import type { Meta, StoryObj } from "@storybook/react";
import { NavbarIcon } from "./navbar-icon.component";
import { FaGithub } from "react-icons/fa6";

const meta: Meta<typeof NavbarIcon> = {
  title: "Components/NavbarIcon",
  component: NavbarIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavbarIcon>;

export const Default: Story = {
  args: {
    icon: <FaGithub />,
    link: "https://github.com",
  },
};
