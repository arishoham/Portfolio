import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const desc =
      'Hey there, This is Ari Shoham. I am a fullstack web developer who has a passion for building things people use.';
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="title"
            content="Ari Shoham | Fullstack Software Engineer"
          />
          <meta name="description" content={desc} />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Ari Shoham | Fullstack Software Engineer"
          />
          <meta property="og:description" content={desc} />
          <meta property="og:image" content="/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Ari Shoham | Fullstack Software Engineer"
          />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:image" content="/banner.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
