import {
	AspectRatio,
	Box,
	Container,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

import content from '@content/pages/home/sections/parade.md';

// Convert common YouTube/Vimeo share URLs into their embeddable form.
function toEmbedUrl(url: string): string {
	const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
	if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
	const vimeo = url.match(/vimeo\.com\/(\d+)/);
	if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
	const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
	if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;
	return url;
}

function Parade() {
	const { attributes, html } = content;
	const {
		title, subtitle, videoUrl, mapImage, mapAlt,
	} = attributes;

	return (
		<Box id='parade' bg='brand.teal' py={{ base: 14, md: 20 }} px={4}>
			<Container maxW='container.md' textAlign='center'>
				<Heading as='h2' size='2xl' mb={3} color='brand.ink'>
					{title}
				</Heading>
				{subtitle && (
					<Text fontSize='xl' fontWeight={700} color='brand.ink' mb={5}>
						{subtitle}
					</Text>
				)}
				<Box
					className='markdown'
					maxW='38em'
					mx='auto'
					fontSize='lg'
					color='brand.ink'
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				{videoUrl && (
					<AspectRatio
						maxW='44em'
						mx='auto'
						mt={10}
						ratio={16 / 9}
						borderRadius='xl'
						overflow='hidden'
						boxShadow='lg'
					>
						<iframe
							src={toEmbedUrl(videoUrl)}
							title={`${title} video`}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</AspectRatio>
				)}

				{mapImage && (
					<Box mt={10}>
						<Image
							src={mapImage}
							alt={mapAlt || 'Parade route map'}
							mx='auto'
							maxW='full'
							borderRadius='xl'
							boxShadow='lg'
						/>
					</Box>
				)}
			</Container>
		</Box>
	);
}

export default Parade;
