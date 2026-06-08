'use client';

import Head from 'next/head';
import type { ReactElement } from 'react';

import Press from '@sections/press';
import PageLayout from '../layouts/PageLayout';

function PressPage() {
	return (
		<>
			<Head>
				<title>Press | Stonewall on Stonewall</title>
			</Head>
			<Press />
		</>
	);
}

PressPage.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>;
};

export default PressPage;
