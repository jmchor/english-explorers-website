import RootLayout from '@/components/RootLayout';
import { GlobalStyles } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={openSans.className}>
			<GlobalStyles />

			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</main>
	);
}
