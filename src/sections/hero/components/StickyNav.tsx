import React, { useEffect, useState } from 'react';
import { Slide } from '@chakra-ui/react';

import NavBar from '@layouts/components/NavBar';

type StickyNavProps = {
  triggerElementRef: React.RefObject<HTMLElement>;
};

const StickyNav: React.FC<StickyNavProps> = ({ triggerElementRef }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const element = triggerElementRef.current;
		if (!element) return undefined;

		const observer = new IntersectionObserver(
			([entry]) => setShow(!entry.isIntersecting),
			{ threshold: 0 },
		);
		observer.observe(element);
		return () => observer.disconnect();
	}, [triggerElementRef]);

	return (
		<Slide direction="top" in={show} style={{ zIndex: 20 }}>
			<NavBar />
		</Slide>
	);
};

export default StickyNav;
