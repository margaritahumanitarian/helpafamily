import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Card, { CardAction, CardParagraph, CardTitle } from '../components/Card';
import PrimaryLayout from '../components/PrimaryLayout';
import useStripeSession from '../hooks/useStripeSession';

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
    content_type: 'pageWithCards',
    'fields.slug': 'fund',
  });

  return {
    props: {
      page: res.items[0],
    },
  };
}

function StripeAction({ amount, text }) {
  const [handleSubmit, isPending] = useStripeSession({
    amount,
    cause: text,
  });

  return (
    <CardAction isPending={isPending} onClick={handleSubmit}>
      {text}
    </CardAction>
  );
}

function LocalAction({ link, text }) {
  return <CardAction linkTo={link}>{text}</CardAction>;
}

const renderAction = ({ actionText, actionAmount, actionLink }) => {
  if (actionAmount) {
    return <StripeAction amount={actionAmount} text={actionText} />;
  } else {
    return <LocalAction link={actionLink} text={actionText} />;
  }
};

export default function Home({
  page: {
    fields: { cards },
  },
}) {
  return (
    <PrimaryLayout>
      {cards.map((card) => {
        const {
          fields: {
            actionText,
            actionAmount,
            actionLink,
            background: {
              fields: {
                file: { url },
              },
            },
            content: rawRichTextField,
            title,
          },
          sys: { id },
        } = card;

        return (
          <Card backgroundImageSource={`https:${url}`} key={id}>
            <CardTitle>{title}</CardTitle>
            {documentToReactComponents(rawRichTextField, options)}
            {actionText &&
              renderAction({ actionText, actionAmount, actionLink })}
          </Card>
        );
      })}
    </PrimaryLayout>
  );
}
