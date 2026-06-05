import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
	baseStyle: {
		fontFamily: 'BobbyJones, sans-serif',
		fontWeight: 500,
		color: 'neutral.900',
	},
	variants: {
		secondary: {
			fontFamily: 'Roboto Condensed, sans-serif',
			fontWeight: 700,
			textTransform: 'uppercase',
			letterSpacing: '0.05em',
		},
	},
});

export default Heading;
