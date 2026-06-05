import {
	Badge,
	Box,
	Container,
	Heading,
	Text,
} from '@chakra-ui/react';

import content from '@content/pages/home/sections/parade.md';

function Parade() {
	const { attributes, html } = content;
	const { title, subtitle, dj } = attributes;

	return (
		<Box id='parade' bg='brand.teal' py={{ base: 14, md: 20 }} px={4}>
			<Container maxW='container.md' textAlign='center'>
				<Heading as='h2' size='2xl' mb={3} color='brand.ink'>
					{title}
				</Heading>
				{subtitle && (
					<Text fontSize='xl' fontWeight={700} color='brand.ink' mb={5}>
						{subtitle}
					</Text>
				)}
				<Box
					className='markdown'
					maxW='38em'
					mx='auto'
					fontSize='lg'
					color='brand.ink'
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				{dj && (
					<Badge
						mt={6}
						fontSize='lg'
						px={4}
						py={2}
						borderRadius='full'
						bg='brand.magenta'
						color='neutral.50'
						textTransform='none'
					>
						{dj}
					</Badge>
				)}
			</Container>
		</Box>
	);
}

export default Parade;
