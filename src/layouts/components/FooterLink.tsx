import { Link, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<ListItem>
			<Link as={NextLink} href={href}>
				{children}
			</Link>
		</ListItem>
	);
}

export default FooterLink;
