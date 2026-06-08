import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

import content from '@content/pages/home/sections/festivities.md';

interface FoodTruck {
	name: string;
	image?: string;
	url?: string;
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
								<Flex
									key={truck.name}
									bg='white'
									borderRadius='xl'
									boxShadow='sm'
									p={4}
									h={{ base: '6rem', md: '7rem' }}
									w={{ base: '8.5rem', md: '10rem' }}
									align='center'
									justify='center'
								>
									{truck.image ? (
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
									)}
								</Flex>
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
