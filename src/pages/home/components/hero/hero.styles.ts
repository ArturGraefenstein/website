import { css } from "../../../../../styled-system/css";
import { vstack } from "../../../../../styled-system/patterns";

export const wrapperClass = vstack({
	alignItems: "center",
	justifyContent: "center",
	height: "[calc(100vh - 230px)]",
	minHeight: "[min-content]",
	width: "[100%]",
	padding: "64px",
})

export const sectionsBaselineClass = vstack({
	alignItems: "flex-start",
	gap: "32px",
})

export const sectionWrapperClass = vstack({
	alignItems: "flex-start"
})

export const titleClass = css({
	fontSize: "64px",
	whiteSpace: "pre-line",
	lineHeight: "72px",
	color: "white",
	marginLeft: "[16px]"
})

export const nameClass = css({
	color: "brand.1"
})

export const htmlTagClass = css({
	fontFamily: "mono",
	fontSize: "14px",
	lineHeight: "18px",
	color: "brand.2",
})

export const paragraphClass = css({
	fontSize: "18px",
	lineHeight: "22px",
	color: "white",
	marginLeft: "[16px]",
	maxWidth: "[600px]",
})	
