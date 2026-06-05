import {
	Box,
	Flex,
	Heading,
	Link,
	Icon,
	List,
	Text,
} from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

import settings from '@content/settings/site.json';
import FooterLink from './FooterLink';

const links = [
	{ href: '/#about', text: 'About' },
	{ href: '/#schedule', text: 'Schedule' },
	{ href: '/#lineup', text: 'Performers' },
	{ href: '/#get-involved', text: 'Get Involved' },
];

function Footer() {
	return (
		<Flex
			p={8}
			backgroundColor='brand.purple'
			color='neutral.50'
			flexDir={{ base: 'column', md: 'row' }}
			justifySelf='flex-end'
			gap={6}
		>
			<Box w='full' textAlign={{ base: 'center', md: 'left' }}>
				<Heading as='span' size='lg' color='neutral.50'>
					{settings.siteTitle}
				</Heading>
				<Text mt={2}>{settings.tagline}</Text>
				<Text mt={2}>
					<Icon as={FaEnvelope} />
					{' '}
					<Link href={`mailto:${settings.email}`}>{settings.email}</Link>
				</Text>
			</Box>

			<Box w='full' textAlign={{ base: 'center', md: 'left' }}>
				<Heading size='md' variant='secondary' color='neutral.50' mb={2}>
					Links
				</Heading>
				<List spacing={1}>
					{links.map(({ href, text }) => (
						<FooterLink key={text} href={href}>{text}</FooterLink>
					))}
				</List>
			</Box>
		</Flex>
	);
}

export default Footer;
