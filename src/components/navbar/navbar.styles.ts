import { css } from "../../../styled-system/css";
import { hstack } from "../../../styled-system/patterns";

export const navbarClass = css({
	padding: "64px 0px",
	width: "[100%]",
	borderBottom: "1px solid #43454D",
});

export const containerClass = hstack({
	justifyContent: "space-between",
	alignItems: "center",
	width: "[100%]",
});

export const menuClass = hstack({
	gap: "32px"
});

