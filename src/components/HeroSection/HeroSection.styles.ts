import { cva } from "styled-system/css";

export const heroSectionStyles = cva({
	base: {
		width: "100%",
		background: "#292F36",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingX: "1rem",
		paddingTop: "4rem",
		paddingBottom: "8rem",
		overflowX: "hidden",
		md: {
			paddingX: "128px",
		},
	},
});

export const heroInnerStyles = cva({
	base: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "4rem",
	},
});

export const heroProfileCardStyles = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "2rem",
		background: "#292F36",
		border: "4px solid white",
		boxShadow: "0 -4px 2px 0 rgba(18,247,214,1)",
		borderRadius: "160px 0 160px 0",
		padding: "1.5rem",
		md: {
			width: "320px",
			height: "520px",
		},
	},
});

export const heroProfilePicStyles = cva({
	base: {
		width: "8rem",
		height: "8rem",
		borderRadius: "full",
		background: "#43454D",
		border: "4px solid #12F7D6",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	},
});

export const heroProfileNameStyles = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});

export const heroProfileRoleStyles = cva({
	variants: {
		variant: {
			role: {
				color: "#12F7D6",
				fontFamily: "mono",
				fontSize: "1.125rem",
			},
			default: {
				fontSize: "2xl",
				fontWeight: "bold",
				color: "white",
			},
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export const heroInfoCardsStyles = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
		width: "100%",
	},
});

export const heroSkillsListStyles = cva({
	base: {
		display: "flex",
		flexWrap: "wrap",
		gap: "0.5rem",
		justifyContent: "center",
	},
});

export const heroSkillStyles = cva({
	base: {
		background: "#43454D",
		color: "#12F7D6",
		paddingX: "1rem",
		paddingY: "0.25rem",
		borderRadius: "full",
		fontSize: "xs",
		fontFamily: "mono",
	},
});

export const heroRightColStyles = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
		alignItems: "flex-start",
		width: "100%",
		maxWidth: "40rem",
	},
});

export const heroRightHeaderStyles = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
	},
});

export const heroRightHiStyles = cva({
	base: {
		color: "#12F7D6",
		fontSize: "1.125rem",
		fontFamily: "mono",
	},
});

export const heroRightNameStyles = cva({
	base: {
		fontSize: ["2.25rem", null, "3rem"],
		fontWeight: "bold",
		color: "white",
		lineHeight: "tight",
	},
});

export const heroRightRoleStyles = cva({
	base: {
		fontSize: "2xl",
		color: "#98FAEC",
		fontFamily: "mono",
	},
});

export const heroRightTextStyles = cva({
	base: {
		color: "rgba(255,255,255,0.8)",
		fontSize: "1rem",
		md: {
			fontSize: "1.125rem",
		},
		maxWidth: "32rem",
	},
});

export const heroRightHighlightsStyles = cva({
	base: {
		display: "flex",
		flexDirection: "row",
		gap: "1.5rem",
		marginTop: "1rem",
	},
});
