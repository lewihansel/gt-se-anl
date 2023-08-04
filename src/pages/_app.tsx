import 'styles/globals.css';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ANIM_SERVICE } from 'constant/environment';
import { mainContainerStyle } from 'styles/mainContainer';
import { css } from '@emotion/react';
import Link from 'next/link';
import ButtonDefault from 'components/Button/ButtonDefault';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
    const client = new ApolloClient({
        uri: ANIM_SERVICE,
        cache: new InMemoryCache(),
    });

    return (
        <>
            <Head>
                <title>Anim List</title>
                <meta name="description" content="Anim List from Anilist!" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ApolloProvider client={client}>
                <main className={montserrat.variable}>
                    <div css={mainContainerStyle}>
                        <nav css={navContainer}>
                            <Link href="/">
                                <h2 css={navLogo}>Animlist</h2>
                            </Link>
                            <div>
                                <ButtonDefault>Collection 💼</ButtonDefault>
                            </div>
                        </nav>
                        <Component {...pageProps} />
                    </div>
                </main>
            </ApolloProvider>
        </>
    );
}

const navLogo = css({
    borderBottom: 'white solid 1px',
});

const navContainer = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 20px',
});
