import { cva } from '../../../styled-system/css';

export const navbarButtonClass = cva({
	base: {
		fontFamily: 'IBM Plex Mono',
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
				color: '#12F7D6',
			},
			false: {
				color: '#FFFFFF',
				_hover: {
					color: '#12F7D6',
				},
			},
		},
	},
	defaultVariants: {
		isActive: false,
	},
});