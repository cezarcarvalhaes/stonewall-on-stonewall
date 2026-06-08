import React from 'react';
import NextLink from 'next/link';
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Link,
	VStack,
} from '@chakra-ui/react';

import { SECTIONS, PAGES } from '@sections/dictionary';
import settings from '@content/settings/site.json';

const LINKS = [...SECTIONS, ...PAGES];

type NavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => (
	<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
		<DrawerOverlay>
			<DrawerContent bg="brand.purple" color="neutral.50">
				<DrawerCloseButton />
				<DrawerHeader fontFamily="League Spartan, sans-serif" fontSize="xl">
					{settings.siteTitle}
				</DrawerHeader>
				<DrawerBody>
					<VStack spacing={5} align="start" mt={4}>
						{LINKS.map(({ label, href }) => (
							<Link
								as={NextLink}
								key={href}
								href={href}
								fontSize="2xl"
								fontWeight={700}
								onClick={onClose}
								_hover={{ color: 'brand.yellow' }}
							>
								{label}
							</Link>
						))}
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</DrawerOverlay>
	</Drawer>
);

export default NavDrawer;
