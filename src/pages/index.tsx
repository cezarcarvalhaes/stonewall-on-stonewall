'use client';

import Script from 'next/script';
import type { ReactElement } from 'react';
import Banner from '@sections/banner';
import Hero from '@sections/hero';
import Parade from '@sections/parade';
import Schedule from '@sections/schedule';
import Festivities from '@sections/festivities';
import About from '@sections/about';
import Lineup from '@sections/lineup';
import Partners from '@sections/partners';
import GetInvolved from '@sections/get-involved';
import RootLayout from '../layouts/RootLayout';

type WindowWithNetlifyIdentity = Window & { netlifyIdentity?: any };

function Home() {
	if (typeof window !== 'undefined') {
		const { netlifyIdentity } = window as WindowWithNetlifyIdentity;
		// Redirect to the admin page once a CMS user logs in.
		if (netlifyIdentity) {
			netlifyIdentity.on('init', (user: any) => {
				if (!user) {
					netlifyIdentity.on('login', () => {
						document.location.href = '/admin/';
					});
				}
			});
		}
	}

	return (
		<>
			<Script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
			<main>
				<Banner />
				<Hero />
				<Parade />
				<Schedule />
				<Festivities />
				<About />
				<Lineup />
				<Partners />
				<GetInvolved />
			</main>
		</>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <RootLayout>{page}</RootLayout>;
};

export default Home;
