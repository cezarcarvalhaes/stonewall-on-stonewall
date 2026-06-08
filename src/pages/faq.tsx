'use client';

import Head from 'next/head';
import type { ReactElement } from 'react';

import Faq from '@sections/faq';
import PageLayout from '../layouts/PageLayout';

function FaqPage() {
	return (
		<>
			<Head>
				<title>FAQ | Stonewall on Stonewall</title>
			</Head>
			<Faq />
		</>
	);
}

FaqPage.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>;
};

export default FaqPage;
