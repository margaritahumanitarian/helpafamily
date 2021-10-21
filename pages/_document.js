/* eslint-env node*/
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

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

          {/* Favicon */}

          <link href="/images/favicon.ico" rel="icon" />

          {/* Windows Tile colour */}
          <meta content="#100030" name="msapplication-TileColor" />
          <meta content="#100030" name="theme-color" />

          {/* Roboto Font */}
          {/* <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            rel="stylesheet"
          /> */}
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
