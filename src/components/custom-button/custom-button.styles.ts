import { cva } from "styled-system/css";

export const buttonClass = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "0.5rem",
		px: "2rem",
		py: "1rem",
		borderRadius: "32px",
		fontFamily: "sans-serif",
		fontSize: "lg",
		fontWeight: "normal",
		transitionProperty: "colors",
		cursor: "pointer",
		userSelect: "none",
	},
	variants: {
		variant: {
			primary: {
				background: "#12F7D6",
				color: "#292F36",
				_hover: { background: "#98FAEC" },
			},
			secondary: {
				background: "#43454D",
				color: "white",
				_hover: { background: "#292F36", color: "#12F7D6" },
			},
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});
