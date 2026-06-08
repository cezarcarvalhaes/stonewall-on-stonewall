import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';

import content from '@content/pages/home/sections/festivities.md';

interface FoodTruck {
	name: string;
	image?: string;
	url?: string;
}

const foodCardProps = {
	bg: 'white',
	borderRadius: 'xl',
	boxShadow: 'sm',
	p: 4,
	h: { base: '6rem', md: '7rem' },
	w: { base: '8.5rem', md: '10rem' },
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
} as const;

function FoodTruckCard({ truck }: { truck: FoodTruck }) {
	const inner = truck.image ? (
		<Image
			src={truck.image}
			alt={truck.name}
			maxH='4rem'
			maxW='full'
			objectFit='contain'
			borderRadius='md'
		/>
	) : (
		<Text fontWeight={700} textAlign='center' color='brand.ink'>
			{truck.name}
		</Text>
	);

	if (truck.url) {
		return (
			<Link
				href={truck.url}
				target='_blank'
				rel='noopener noreferrer'
				transition='all 0.15s ease'
				_hover={{ textDecor: 'none', transform: 'translateY(-3px)', boxShadow: 'md' }}
				{...foodCardProps}
			>
				{inner}
			</Link>
		);
	}
	return <Box {...foodCardProps}>{inner}</Box>;
}

function Festivities() {
	const { attributes, html } = content;
	const {
		title, mapImage, mapAlt, foodHeading, foodTrucks,
	} = attributes as {
		title: string;
		mapImage?: string;
		mapAlt?: string;
		foodHeading?: string;
		foodTrucks?: FoodTruck[];
	};

	return (
		<Box id='festivities' bg='brand.orange' color='brand.ink' py={{ base: 14, md: 20 }} px={4}>
			<Container maxW='container.md'>
				<Heading as='h2' size='2xl' mb={6} color='brand.ink'>
					{title}
				</Heading>
				<Box
					className='markdown'
					fontSize={{ base: 'lg', md: 'xl' }}
					dangerouslySetInnerHTML={{ __html: html }}
				/>

				{foodTrucks && foodTrucks.length > 0 && (
					<Box mt={10}>
						{foodHeading && (
							<Heading as='h3' size='lg' mb={4} color='brand.ink'>
								{foodHeading}
							</Heading>
						)}
						<Flex wrap='wrap' gap={4} justify='center'>
							{foodTrucks.map((truck) => (
								<FoodTruckCard key={truck.name} truck={truck} />
							))}
						</Flex>
					</Box>
				)}

				{mapImage && (
					<Image
						src={mapImage}
						alt={mapAlt || 'Gathering space map'}
						mt={10}
						mx='auto'
						maxW='full'
						borderRadius='xl'
						boxShadow='lg'
					/>
				)}
			</Container>
		</Box>
	);
}

export default Festivities;
