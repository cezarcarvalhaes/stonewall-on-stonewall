'use client';

import { useRef } from 'react';
import NextLink from 'next/link';
import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';

import { SECTIONS } from '@sections/dictionary';
import content from '@content/pages/home/sections/hero.md';
import StickyNav from './components/StickyNav';

function Hero() {
	const { attributes, html } = content;
	const {
		eyebrow, title, date, location,
	} = attributes;
	const navRef = useRef<HTMLDivElement>(null);

	return (
		<Box
			as='header'
			id='top'
			className='rainbow-bg'
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
					textShadow='0 2px 14px rgba(0,0,0,0.28)'
				>
					{title}
				</Heading>
				<Flex
					justify='center'
					gap={{ base: 2, md: 6 }}
					flexDir={{ base: 'column', md: 'row' }}
					fontWeight={700}
					fontSize={{ base: 'xl', md: '2xl' }}
					textShadow='0 2px 10px rgba(0,0,0,0.35)'
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
					fontWeight={500}
					textShadow='0 1px 6px rgba(0,0,0,0.3)'
					mb={10}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<Stack
					ref={navRef}
					direction='row'
					spacing={{ base: 4, md: 8 }}
					justify='center'
					flexWrap='wrap'
					rowGap={3}
				>
					{SECTIONS.map(({ label, href }) => (
						<Link
							as={NextLink}
							key={href}
							href={href}
							fontWeight={700}
							fontSize={{ base: 'md', md: 'lg' }}
							color='brand.yellow'
							textDecoration='underline'
							textUnderlineOffset='4px'
							textDecorationThickness='2px'
							textShadow='0 1px 6px rgba(0,0,0,0.3)'
							_hover={{ color: 'neutral.50' }}
						>
							{label}
						</Link>
					))}
				</Stack>
			</Container>
			<StickyNav triggerElementRef={navRef} />
		</Box>
	);
}

export default Hero;
