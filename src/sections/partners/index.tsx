import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';

import partners from '@content/pages/home/partners.json';

interface Partner {
	name: string;
	url?: string;
	image?: string;
}

const cardProps = {
	bg: 'white',
	borderRadius: 'xl',
	boxShadow: 'sm',
	p: 4,
	h: { base: '6.5rem', md: '7.5rem' },
	w: { base: '9.5rem', md: '11.5rem' },
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
} as const;

function PartnerCard({ partner }: { partner: Partner }) {
	const inner = partner.image ? (
		<Image
			src={partner.image}
			alt={partner.name}
			maxH='4rem'
			maxW='full'
			objectFit='contain'
			borderRadius='md'
		/>
	) : (
		<Text fontWeight={700} fontSize='lg' textAlign='center' color='brand.ink'>
			{partner.name}
		</Text>
	);

	if (partner.url) {
		return (
			<Link
				href={partner.url}
				target='_blank'
				rel='noopener noreferrer'
				transition='all 0.15s ease'
				_hover={{ textDecor: 'none', transform: 'translateY(-3px)', boxShadow: 'md' }}
				{...cardProps}
			>
				{inner}
			</Link>
		);
	}
	return <Box {...cardProps}>{inner}</Box>;
}

function Partners() {
	const { title, entries } = partners as { title: string; entries: Partner[] };

	return (
		<Box id='partners' bg='brand.cream' py={{ base: 14, md: 20 }} px={4}>
			<Container maxW='container.lg' textAlign='center'>
				<Heading as='h2' size='2xl' mb={10}>
					{title}
				</Heading>
				<Flex justify='center' align='center' wrap='wrap' gap={{ base: 4, md: 6 }}>
					{entries?.map((partner) => (
						<PartnerCard key={partner.name} partner={partner} />
					))}
				</Flex>
			</Container>
		</Box>
	);
}

export default Partners;
