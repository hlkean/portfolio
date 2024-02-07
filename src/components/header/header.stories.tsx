import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./header";

const meta: Meta<typeof Header> = {
	component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	args: {
		navData: [
			{ href: "#", title: "Home" },
			{ href: "#", title: "About" },
			{ href: "#", title: "Work" },
			{ href: "#", title: "Contact" },
		],
	},
};
