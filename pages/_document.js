/* eslint-env node*/
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  // eslint-disable-next-line
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // eslint-disable-next-line
  render() {
    return (
      <Html lang="en-us" data-theme="light">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Donations for MHF Cares"
          />
          <meta
            name="keywords"
            content="donate"
          />
          <meta
            property="og:site_name"
            content="Donations for MHF Cares"
          />
          <meta property="og:title" content="Octopus Energy USA" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://my.octopusenergy.com"
          />

          <meta
            property="og:image"
            content="/branding/social-share.jpg"
          />

          {/* Twitter card tags */}
          <meta name="twitter:card" content="Donations for MHF Cares" />
          <meta name="twitter:title" content="Donate to MHF Cares" />
          <meta
            name="twitter:description"
            content="Donations for MHF Cares"
          />
          <meta
            name="twitter:image"
            content="/branding/social-share.png"
          />
          <meta name="twitter:site" content="@mhfcares" />
          <meta name="twitter:creator" content="@mhfcares" />

          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/branding/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/branding/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/branding/favicons/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/branding/favicons/safari-pinned-tab.svg"
            color="#f050f8"
          />
          {/* Windows Tile colour */}
          <meta name="msapplication-TileColor" content="#100030" />
          <meta name="theme-color" content="#100030" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;