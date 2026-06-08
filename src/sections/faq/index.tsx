import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
	Heading,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

import top from '@content/pages/faq/top-section.md';
import faq from '@content/pages/faq/entries.yml';

interface Entry {
	question: string;
	answer: string;
}

function Faq() {
	const { attributes, html } = top;
	const { entries } = faq as { entries: Entry[] };

	return (
		<Box bg='brand.cream' py={{ base: 14, md: 20 }} px={4} flex='1'>
			<Container maxW='container.md'>
				<Heading as='h1' color='brand.ink' size='2xl' mb={4}>
					{attributes.title}
				</Heading>
				<Box className='markdown' fontSize='lg' mb={8} dangerouslySetInnerHTML={{ __html: html }} />

				<Accordion allowMultiple>
					{entries?.map((entry) => (
						<AccordionItem
							key={entry.question}
							border='none'
							bg='neutral.50'
							borderRadius='xl'
							mb={3}
							overflow='hidden'
						>
							<AccordionButton py={4} _expanded={{ bg: 'brand.yellow' }}>
								<Box as='span' flex='1' textAlign='left' fontWeight={700} fontSize='lg'>
									{entry.question}
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={5}>
								<Box className='markdown'>
									<ReactMarkdown>{entry.answer}</ReactMarkdown>
								</Box>
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</Box>
	);
}

export default Faq;
