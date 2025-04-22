import { cva } from '../../../styled-system/css';

export const navbarButtonClass = cva({
	base: {
		fontFamily: 'mono',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '1.33em',
		textAlign: 'left',
		cursor: 'pointer',
		transition: '[color 0.3s ease]',
	},
	variants: {
		isActive: {
			true: {
				color: "brand.1",
			},
			false: {
				color: "white",
				_hover: {
					color: "brand.1",
				},
			},
		},
	},
	defaultVariants: {
		isActive: false,
	},
});