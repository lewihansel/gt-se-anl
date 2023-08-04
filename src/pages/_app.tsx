import 'styles/globals.css';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ANIM_SERVICE } from 'constant/environment';
import { mainContainerStyle } from 'styles/mainContainer';
import { css } from '@emotion/react';

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
                        <h2
                            css={css({
                                margin: '0 0 16px',
                                borderBottom: 'white solid 1px',
                            })}
                        >
                            Animlist
                        </h2>
                        <Component {...pageProps} />
                    </div>
                </main>
            </ApolloProvider>
        </>
    );
}
