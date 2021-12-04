import React from 'react';

import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import CardsLayout from '../components/CardsLayout';
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

export async function getServerSideProps() {
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
  );
}
