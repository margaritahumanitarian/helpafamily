/* eslint-env node*/
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

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
            content="Donations for Margarita Humanitarian Foundation"
          />
          <meta
            name="keywords"
            content="donate"
          />
          <meta
            property="og:site_name"
            content="Donations for Margarita Humanitarian Foundation"
          />
          <meta property="og:title" content="Help a family through Margarita Humanitarian Foundation" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://helpafamily.margaritahumanitarian.org"
          />

          <meta
            property="og:image"
            content="/branding/social-share.jpg"
          />

          {/* Twitter card tags */}
          <meta name="twitter:card" content="Donations for Margarita Humanitarian Foundation" />
          <meta name="twitter:title" content="Donate to Margarita Humanitarian Foundation" />
          <meta
            name="twitter:description"
            content="Donations for Margarita Humanitarian Foundation"
          />
          <meta
            name="twitter:image"
            content="/branding/social-share.png"
          />
          <meta name="twitter:site" content="@margaritahforg" />
          <meta name="twitter:creator" content="@margaritahforg" />

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
