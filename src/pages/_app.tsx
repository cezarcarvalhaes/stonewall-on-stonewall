import '../style/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

import theme from '../theme';
import settings from '../../content/settings/site.json';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const { getLayout } = Component;
	const component = getLayout
		? getLayout(<Component {...pageProps} />)
		: <Component {...pageProps} />;

	const title = `${settings.siteTitle} | ${settings.tagline}`;
	const { description } = settings;

	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' type='image/svg+xml' href='/icon.svg' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='shortcut icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='theme-color' content='#e6308a' />
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='/images/og-image.jpg' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={title} />
				<meta name='twitter:description' content={description} />
				<meta name='twitter:image' content='/images/og-image.jpg' />
			</Head>
			{component}
		</ChakraProvider>
	);
}
