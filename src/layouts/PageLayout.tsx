import { Flex } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Footer from './components/footer';

export default function PageLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<Flex
			w="full"
			flexDirection="column"
			minH="100vh"
		>
			<NavBar />
			<Flex as="main" flex="1" flexDirection="column">
				{children}
			</Flex>
			<Footer />
		</Flex>
	);
}
