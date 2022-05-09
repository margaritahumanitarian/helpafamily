import React from 'react';

import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import CardsLayout from '../components/CardsLayout';
import Head from 'next/head';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Card, { CardParagraph } from '../components/Card';

import PrimaryLayout from '../components/PrimaryLayout';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <CardParagraph>{children}</CardParagraph>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc text-left pl-6">
        {children.map(({ key, ...rest }) => {
          const firstChild = rest.props.children[0];
          return <li key={key}>{firstChild.props.children[0]}</li>;
        })}
      </ul>
    ),
  },
};

const options_for_contact = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <CardParagraph>{children}</CardParagraph>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc text-left pl-6">
        {children.map(({ key, ...item }) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    ),
    [INLINES.HYPERLINK]: ({ data: { uri } }, children) => (
      <a className="text-green-700" href={uri}>
        {children}
      </a>
    ),
  },
};

export async function getStaticProps() {
  const client = createClient({
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'pageWithPartnerCards',
    'fields.slug': 'partnerwithuscards',
  });

  return {
    props: {
      page: res.items[0],
    },
  };
}

export default function PartnerWithUs({
  page: {
    fields: { partnerCards },
  },
}) {
  return (
    <>
      <Head>
        <title>
          {
            'Margarita Humanitarian Foundation - Partner With Us On Our Mission To Serve'
          }
        </title>
        <meta
          name="description"
          content="Our goal at Margarita Humanitarian Foundation is to serve the Uninsured and Under-insured. Originally founded in 2019 as a humanitarian medical clinic. In July 2021, under new management the focus shifted to identifying and addressing the most critical community needs in Antelope Valley, as a humanitarian organization. Under this new mission, we're working to establish partnerships with schools, nonprofits, the government, and local community leaders. Our goal is to help the individuals and communities who need help most. We're particularly interested in setting up new programs to make a difference in at-risk youth lives."
        />
      </Head>
      <PrimaryLayout>
        <CardsLayout>
          {partnerCards.map((partnerCard) => {
            const {
              fields: {
                image: {
                  fields: {
                    file: { url },
                  },
                },
                description: rawRichTextField,
                contactInstructionsRTF: contactInstructions,
                title,
              },
              sys: { id },
            } = partnerCard;
            return (
              <Card
                address={documentToReactComponents(
                  contactInstructions,
                  options_for_contact
                )}
                backgroundImageSource={`https:${url}`}
                key={id}
                paragraphs={[
                  documentToReactComponents(rawRichTextField, options),
                ]}
                simulateHover
                title={title}
              />
            );
          })}
        </CardsLayout>
      </PrimaryLayout>
    </>
  );
}
