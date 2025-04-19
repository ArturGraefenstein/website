import { cva } from "styled-system/css";

export const socialBarStyles = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		gap: "2rem",
	},
});

export const socialLinkStyles = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "0.5rem",
		color: "white",
		_hover: {
			color: "#12F7D6",
		},
		textDecoration: "none",
	},
});

export const socialIconStyles = cva({
	base: {
		width: "1.25rem",
		height: "1.25rem",
		color: "#12F7D6",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

export const socialLinkTextStyles = cva({
	base: {
		fontSize: "1rem",
		fontFamily: "mono",
	},
});
