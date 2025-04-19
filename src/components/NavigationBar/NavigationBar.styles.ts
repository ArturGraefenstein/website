import { cva } from "styled-system/css";

export const navBarStyles = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
		background: "#1A1E23",
		border: "1px solid white",
		borderRadius: "40px",
		padding: "0.75rem",
		position: "absolute",
		left: "4rem",
		top: "4rem",
		zIndex: 10,
	},
});

export const navItemStyles = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "0.5rem",
		paddingX: "0.75rem",
		paddingY: "0.5rem",
		borderRadius: "40px",
		transitionProperty: "background-color",
		transitionDuration: "colors",
		cursor: "pointer",
		_hover: {
			background: "rgba(255,255,255,0.06)",
		},
	},
});

export const navIconStyles = cva({
	base: {
		width: "1.5rem",
		height: "1.5rem",
		background: "white",
		borderRadius: "full",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "0.75rem",
		fontWeight: "bold",
		color: "#292F36",
	},
});

export const navLabelStyles = cva({
	base: {
		color: "white",
		fontFamily: "mono",
		fontSize: "1rem",
	},
});
