import { cva } from "styled-system/css";

export const infoCardStyles = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "1rem",
	},
});

export const infoIconStyles = cva({
	base: {
		width: "1.5rem",
		height: "1.5rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "#12F7D6",
	},
});

export const infoValueStyles = cva({
	base: {
		color: "white",
		fontFamily: "mono",
		fontSize: "0.875rem",
		whiteSpace: "nowrap",
	},
});
