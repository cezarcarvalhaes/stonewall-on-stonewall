'use client';

import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';

import content from '@content/pages/home/sections/hero.md';

function Hero() {
	const { attributes, html } = content;
	const {
		eyebrow, title, date, location, ctaLabel, ctaLink,
	} = attributes;

	return (
		<Box
			as='header'
			id='top'
			bgGradient='linear(to-br, brand.magenta, brand.purple 55%, brand.blue)'
			color='neutral.50'
			py={{ base: 16, md: 24 }}
			px={4}
		>
			<Container maxW='container.lg' textAlign='center'>
				{eyebrow && (
					<Text
						textTransform='uppercase'
						fontWeight={700}
						letterSpacing='0.12em'
						color='brand.yellow'
						mb={4}
					>
						{eyebrow}
					</Text>
				)}
				<Heading
					as='h1'
					fontSize={{ base: '3rem', md: '5rem' }}
					lineHeight={1.02}
					mb={6}
					color='neutral.50'
				>
					{title}
				</Heading>
				<Flex
					justify='center'
					gap={{ base: 2, md: 6 }}
					flexDir={{ base: 'column', md: 'row' }}
					fontWeight={700}
					fontSize={{ base: 'xl', md: '2xl' }}
					mb={6}
				>
					<Text>{date}</Text>
					<Text display={{ base: 'none', md: 'block' }}>·</Text>
					<Text>{location}</Text>
				</Flex>
				<Box
					className='markdown-subdued'
					maxW='40em'
					mx='auto'
					fontSize={{ base: 'lg', md: 'xl' }}
					mb={8}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				{ctaLabel && ctaLink && (
					<Button
						as='a'
						href={ctaLink}
						target='_blank'
						rel='noopener noreferrer'
						size='lg'
						bg='brand.yellow'
						color='brand.ink'
						_hover={{ bg: 'brand.orange' }}
						px={8}
					>
						{ctaLabel}
					</Button>
				)}
			</Container>
		</Box>
	);
}

export default Hero;
