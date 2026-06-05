import {
	Box,
	Container,
	Heading,
} from '@chakra-ui/react';

import content from '@content/pages/home/sections/get-involved.md';

function GetInvolved() {
	const { attributes, html } = content;
	const { title } = attributes;

	return (
		<Box id='get-involved' bg='brand.green' color='neutral.50' py={{ base: 14, md: 20 }} px={4}>
			<Container maxW='container.md'>
				<Heading as='h2' size='2xl' mb={6} color='neutral.50'>
					{title}
				</Heading>
				<Box
					className='markdown-subdued'
					fontSize={{ base: 'lg', md: 'xl' }}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</Container>
		</Box>
	);
}

export default GetInvolved;
