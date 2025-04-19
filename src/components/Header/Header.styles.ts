import { cva } from "styled-system/css";

export const headerStyles = cva({
	base: {
		width: "100%",
		background: "#292F36",
		overflowX: "hidden",
	},
});

export const headerInnerStyles = cva({
	base: {
		maxWidth: "1536px", // max-w-screen-2xl
		marginX: "auto",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingY: "4rem",
		paddingX: "1rem",
		gap: "2rem",
		md: {
			paddingX: "128px",
			gap: "120px",
		},
	},
});

export const headerLogoBarStyles = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "1rem",
		flexShrink: 0,
		md: {
			gap: "2rem",
		},
	},
});
