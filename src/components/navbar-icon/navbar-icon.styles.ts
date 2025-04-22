import { css } from '../../../styled-system/css';

export const navbarIconClass = css({
	cursor: 'pointer',
	transition: '[color 0.3s ease]',
	fontSize: "16px",
	md: {
		fontSize: "24px",
	},
	color: "white",
	_hover: {
		color: "brand.1",
	},
});