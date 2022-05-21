import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
            </Head>
            <body className={"bg-gradient-to-r from-green-400 to-blue-400"}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
