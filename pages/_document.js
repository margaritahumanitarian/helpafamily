/* eslint-env node*/
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  // eslint-disable-next-line
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // eslint-disable-next-line
  render() {
    return (
      <Html data-theme="light" lang="en-us">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            content="Donations for Margarita Humanitarian Foundation"
            name="description"
          />
          <meta content="donate" name="keywords" />
          <meta
            content="Donations for Margarita Humanitarian Foundation"
            property="og:site_name"
          />
          <meta
            content="Help a family through Margarita Humanitarian Foundation"
            property="og:title"
          />
          <meta content="website" property="og:type" />
          <meta
            content="https://helpafamily.margaritahumanitarian.org"
            property="og:url"
          />

          <meta content="/branding/social-share.jpg" property="og:image" />

          {/* Twitter card tags */}
          <meta
            content="Donations for Margarita Humanitarian Foundation"
            name="twitter:card"
          />
          <meta
            content="Donate to Margarita Humanitarian Foundation"
            name="twitter:title"
          />
          <meta
            content="Donations for Margarita Humanitarian Foundation"
            name="twitter:description"
          />
          <meta content="/branding/social-share.png" name="twitter:image" />
          <meta content="@margaritahforg" name="twitter:site" />
          <meta content="@margaritahforg" name="twitter:creator" />

          {/* Favicons */}
          <link
            href="/branding/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/branding/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/branding/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#f050f8"
            href="/branding/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          {/* Windows Tile colour */}
          <meta content="#100030" name="msapplication-TileColor" />
          <meta content="#100030" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
