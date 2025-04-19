import { cva } from "styled-system/css";

export const highlightCardStyles = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "1rem",
		background: "#1A1E23",
		borderRadius: "80px",
		boxShadow: "2px 2px 4px 0 rgba(0,0,0,0.25)",
		paddingX: "2rem",
		paddingY: "1.5rem",
	},
});

export const highlightValueStyles = cva({
	base: {
		fontSize: "2.25rem",
		fontFamily: "mono",
		fontWeight: 500,
		color: "#12F7D6",
	},
});

export const highlightLabelStyles = cva({
	base: {
		fontSize: "0.875rem",
		fontFamily: "mono",
		color: "white",
		lineHeight: "tight",
	},
});
