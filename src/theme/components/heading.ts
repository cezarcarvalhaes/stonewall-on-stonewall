import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
	baseStyle: {
		fontFamily: 'League Spartan, sans-serif',
		fontWeight: 800,
		color: 'neutral.900',
	},
	variants: {
		secondary: {
			fontFamily: 'League Spartan, sans-serif',
			fontWeight: 700,
			textTransform: 'uppercase',
			letterSpacing: '0.05em',
		},
	},
});

export default Heading;
