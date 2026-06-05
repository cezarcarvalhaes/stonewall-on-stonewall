import {
	Box,
	Container,
	Heading,
	Link,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';

import lineup from '@content/pages/home/lineup.json';

interface Performer {
	name: string;
	role?: string;
	image?: string;
	link?: string;
}

function PerformerCard({ performer }: { performer: Performer }) {
	const card = (
		<Box
			bg='neutral.50'
			borderRadius='xl'
			overflow='hidden'
			boxShadow='md'
			h='full'
			borderTop='6px solid'
			borderColor='brand.orange'
		>
			{performer.image && (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					src={performer.image}
					alt={performer.name}
					style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
				/>
			)}
			<Box p={5}>
				<Heading as='h3' size='md' mb={1}>
					{performer.name}
				</Heading>
				{performer.role && <Text color='neutral.700'>{performer.role}</Text>}
			</Box>
		</Box>
	);

	if (performer.link) {
		return (
			<Link href={performer.link} target='_blank' rel='noopener noreferrer' _hover={{ textDecor: 'none' }}>
				{card}
			</Link>
		);
	}
	return card;
}

function Lineup() {
	const { title, entries } = lineup as { title: string; entries: Performer[] };

	return (
		<Box id='lineup' bg='brand.yellow' py={{ base: 14, md: 20 }} px={4}>
			<Container maxW='container.lg'>
				<Heading as='h2' size='2xl' mb={10} textAlign='center' color='brand.ink'>
					{title}
				</Heading>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
					{entries?.map((performer) => (
						<PerformerCard key={performer.name} performer={performer} />
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
}

export default Lineup;
