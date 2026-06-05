import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';

import schedule from '@content/pages/home/schedule.yml';

interface ScheduleEntry {
	time: string;
	title: string;
	description?: string;
}

function Schedule() {
	const { title, entries } = schedule as { title: string; entries: ScheduleEntry[] };

	return (
		<Box id='schedule' bg='brand.cream' py={{ base: 14, md: 20 }} px={4}>
			<Container maxW='container.md'>
				<Heading as='h2' size='2xl' mb={10} textAlign='center'>
					{title}
				</Heading>
				<Flex flexDir='column' gap={5}>
					{entries?.map((entry) => (
						<Flex
							key={`${entry.time}-${entry.title}`}
							bg='neutral.50'
							borderRadius='xl'
							borderLeft='8px solid'
							borderColor='brand.magenta'
							p={5}
							gap={5}
							flexDir={{ base: 'column', sm: 'row' }}
							boxShadow='sm'
						>
							<Text
								minW={{ sm: '8.5em' }}
								fontWeight={700}
								fontSize='lg'
								color='brand.magenta'
							>
								{entry.time}
							</Text>
							<Box>
								<Heading as='h3' size='md' mb={1}>
									{entry.title}
								</Heading>
								{entry.description && <Text>{entry.description}</Text>}
							</Box>
						</Flex>
					))}
				</Flex>
			</Container>
		</Box>
	);
}

export default Schedule;
