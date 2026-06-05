import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	Text,
} from '@chakra-ui/react';

import partners from '@content/pages/home/partners.json';

interface Partner {
	name: string;
	url?: string;
	image?: string;
}

function Partners() {
	const { title, entries } = partners as { title: string; entries: Partner[] };

	return (
		<Box id='partners' bg='brand.cream' py={{ base: 14, md: 20 }} px={4}>
			<Container maxW='container.lg' textAlign='center'>
				<Heading as='h2' size='2xl' mb={10}>
					{title}
				</Heading>
				<Flex justify='center' align='center' wrap='wrap' gap={{ base: 8, md: 16 }}>
					{entries?.map((partner) => {
						const inner = partner.image ? (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={partner.image}
								alt={partner.name}
								style={{ maxHeight: '5rem', maxWidth: '14rem', objectFit: 'contain' }}
							/>
						) : (
							<Text fontSize='2xl' fontFamily='BobbyJones, sans-serif'>
								{partner.name}
							</Text>
						);

						return partner.url ? (
							<Link key={partner.name} href={partner.url} target='_blank' rel='noopener noreferrer'>
								{inner}
							</Link>
						) : (
							<Box key={partner.name}>{inner}</Box>
						);
					})}
				</Flex>
			</Container>
		</Box>
	);
}

export default Partners;
