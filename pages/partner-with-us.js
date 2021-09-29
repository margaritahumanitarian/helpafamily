import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Card, {
  CardAddress,
  CardParagraph,
  CardTitle,
} from '../components/Card';

import PrimaryLayout from '../components/PrimaryLayout';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <CardParagraph>{children}</CardParagraph>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc text-left pl-6">
        {children.map((item) => (
          <li key={item.key}>{item.props.children[0].props.children[0]}</li>
        ))}
      </ul>
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
      {partnerCards.map((partnerCard) => {
        const {
          fields: {
            image: {
              fields: {
                file: { url },
              },
            },
            description: rawRichTextField,
            email: emailRichTextFeild,
            title,
          },
          sys: { id },
        } = partnerCard;

        return (
          <Card backgroundImageSource={`https:${url}`} key={id}>
            <CardTitle>{title}</CardTitle>
            {documentToReactComponents(rawRichTextField, options)}
            <CardAddress label="Email us to learn more at:">
              <a style={{ color: 'yellow' }}>
                {documentToReactComponents(emailRichTextFeild, options)}
              </a>
            </CardAddress>
          </Card>
        );
      })}
    </PrimaryLayout>
  );
}
