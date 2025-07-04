import { css } from "../../../styled-system/css";
import { hstack } from "../../../styled-system/patterns";

export const navbarClass = css({
	padding: "32px 16px",
	md: {
		padding: "64px 32px",
	},
	width: "[100%]",
	borderBottom: "1px solid #43454D",
});

export const containerClass = hstack({
	justifyContent: "space-between",
	alignItems: "center",
	width: "[100%]",
});

export const menuClass = hstack({
	gap: "16px",
	md: {
		gap: "32px",
	}
});

