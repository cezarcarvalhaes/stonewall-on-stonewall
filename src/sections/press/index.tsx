import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';

import top from '@content/pages/press/top-section.md';
import press from '@content/pages/press/media-links.json';

interface Entry {
	title: string;
	publisher?: string;
	date?: string;
	url?: string;
	image?: string;
	snippet?: string;
}

function formatDate(date?: string) {
	if (!date) return '';
	const parsed = new Date(date);
	if (Number.isNaN(parsed.getTime())) return date;
	return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function Press() {
	const { attributes, html } = top;
	const { entries } = press as { entries: Entry[] };

	return (
		<Box bg='brand.cream' py={{ base: 14, md: 20 }} px={4} flex='1'>
			<Container maxW='container.md'>
				<Heading as='h1' color='brand.ink' size='2xl' mb={4}>
					{attributes.title}
				</Heading>
				<Box className='markdown' fontSize='lg' mb={10} dangerouslySetInnerHTML={{ __html: html }} />

				{entries && entries.length > 0 ? (
					<Stack spacing={5}>
						{entries.map((entry) => (
							<Flex
								key={entry.title}
								bg='neutral.50'
								borderRadius='xl'
								p={5}
								gap={5}
								align='center'
								flexDir={{ base: 'column', sm: 'row' }}
								boxShadow='sm'
							>
								{entry.image && (
									// eslint-disable-next-line @next/next/no-img-element
									<img
										src={entry.image}
										alt={entry.publisher || entry.title}
										style={{ maxHeight: '4rem', maxWidth: '8rem', objectFit: 'contain' }}
									/>
								)}
								<Box flex='1'>
									<Heading as='h2' size='md' mb={1}>
										{entry.url ? (
											<Link href={entry.url} target='_blank' rel='noopener noreferrer'>
												{entry.title}
											</Link>
										) : (
											entry.title
										)}
									</Heading>
									{(entry.publisher || entry.date) && (
										<Text fontWeight={600} color='neutral.700'>
											{[entry.publisher, formatDate(entry.date)].filter(Boolean).join(' · ')}
										</Text>
									)}
									{entry.snippet && <Text mt={2}>{entry.snippet}</Text>}
								</Box>
							</Flex>
						))}
					</Stack>
				) : (
					<Text fontSize='lg'>
						No press yet — check back soon! In the meantime, help us spread the word.
					</Text>
				)}
			</Container>
		</Box>
	);
}

export default Press;
