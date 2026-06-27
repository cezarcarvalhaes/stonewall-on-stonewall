'use client';

import { useEffect, useState } from 'react';
import { Box, CloseButton, Flex, Text } from '@chakra-ui/react';

import banner from '@content/settings/banner.json';

function Banner() {
	const { enabled, message } = banner;
	// Dismissal is keyed on the message so editing it re-shows the banner.
	const storageKey = `banner-dismissed:${message}`;
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (enabled && localStorage.getItem(storageKey) !== '1') {
			setVisible(true);
		}
	}, [enabled, storageKey]);

	if (!visible) return null;

	return (
		<Box bg='brand.yellow' color='brand.ink' py={3} px={4}>
			<Flex maxW='48em' mx='auto' align='center' gap={3}>
				<Text fontWeight={700} flex='1' textAlign='center'>
					{message}
				</Text>
				<CloseButton
					aria-label='Dismiss banner'
					onClick={() => {
						localStorage.setItem(storageKey, '1');
						setVisible(false);
					}}
				/>
			</Flex>
		</Box>
	);
}

export default Banner;
