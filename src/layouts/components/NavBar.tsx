import React from 'react';
import NextLink from 'next/link';
import {
	Flex,
	IconButton,
	Link,
	Stack,
	useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

import { SECTIONS, PAGES } from '@sections/dictionary';
import settings from '@content/settings/site.json';
import NavDrawer from './NavDrawer';

const LINKS = [...SECTIONS, ...PAGES];

function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				bg="brand.magenta"
				color="neutral.50"
				align="center"
				justify="space-between"
				px={{ base: 4, md: 8 }}
				py={3}
				boxShadow="md"
			>
				<Link
					as={NextLink}
					href="/"
					fontFamily="League Spartan, sans-serif"
					fontWeight={800}
					fontSize={{ base: 'lg', md: 'xl' }}
					_hover={{ textDecor: 'none' }}
				>
					{settings.siteTitle}
				</Link>

				<Stack
					direction="row"
					spacing={6}
					display={{ base: 'none', lg: 'flex' }}
				>
					{LINKS.map(({ label, href }) => (
						<Link
							as={NextLink}
							key={href}
							href={href}
							fontWeight={600}
							_hover={{ color: 'brand.yellow' }}
						>
							{label}
						</Link>
					))}
				</Stack>

				<IconButton
					aria-label="Open navigation menu"
					display={{ base: 'flex', lg: 'none' }}
					variant="ghost"
					color="neutral.50"
					_hover={{ bg: 'whiteAlpha.300' }}
					icon={<FaBars />}
					onClick={onOpen}
				/>
			</Flex>

			<NavDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
}

export default NavBar;
