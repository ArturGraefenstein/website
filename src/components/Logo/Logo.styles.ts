import { cva } from "styled-system/css";

export const logoContainerStyles = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "0.5rem",
	},
});

export const logoCStyles = cva({
	base: {
		fontSize: ["2xl", null, "3xl"],
		fontFamily: "mono",
		fontWeight: 500,
		color: "#12F7D6",
		letterSpacing: "wide",
	},
});

export const logoTextStyles = cva({
	base: {
		fontSize: ["2xl", null, "3xl"],
		fontFamily: "mono",
		fontWeight: 500,
		color: "white",
		letterSpacing: "wide",
	},
});
