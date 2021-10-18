import Footer from '../components/Footer';
import Head from 'next/head';
import LandingPageNav from '../components/LandingPageNav';
import LargeHeroContent from '../components/LargeHeroContent';
import LargeHeroSection from '../components/LargeHeroSection';
import Link from 'next/link';
// import TestimonialCard from '../components/TestimonialCard';
import { createClient } from 'contentful';
/** ------------------------------------------------------------------------------
 *
 * TODO: Change all of the placeholder text to good copy.
 * TODO: Change the call to action link to point to the appropriate destination.
 * DONE: Refactor code by exporting components to proper folders.
 *
 * FIXME: The images are placeholders and need to be changed.
 * FIXME: There's a better way to handle images as per @RedFox0x20 recommendation.
 */
// -------------------------------------------------------------------------------

export async function getStaticProps() {
  const client = createClient({
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'landingPage',
  });

  return {
    props: {
      page: res.items[0],
    },
    revalidate: 10,
  };
}

const TestimonialSection = (testimonialCard) => {
  console.log('testiMonialCard', testimonialCard);
  return (
    <section className="flex flex-col items-center justify-center h-1/2 py-28">
      <div className="text-2xl font-semibold text-gray-500 pb-28">
        <h2>{'See What People Are Saying'}</h2>
      </div>
      <div
        className="grid content-center justify-center grid-cols-1 shadow-md bg-gradient-to-r from-accent to-blue-400 md:grid-cols-2 xl:grid-cols-3 align-center sm:p-24"
        id="cards-section"
      >
        {/* {testimonialCard.map((testimonialCard) => {
          const {
            fields: {
              image: {
                fields: {
                  file: { url },
                },
              },

              title,
              content,
            },
          } = testimonialCard;

          <TestimonialCard content={content} image={url} title={title} />;
        })} */}
      </div>
    </section>
  );
};

const LandingPage = ({
  page: {
    fields: {
      testimonialCard,
      title: landingPageTitle,
      description: landingPageDescription,
    },
  },
}) => {
  return (
    <>
      <Head>
        <title>{'Help a Family in Need'}</title>
        <meta content={'Help a Family in Need'} name="description" />
        <link href="https://www.margaritahumanitarian.org/" rel="canonical" />
        <link href="/images/favicon.ico" rel="icon" />
      </Head>
      <LandingPageNav />
      <main className="justify-center">
        <LargeHeroSection bgImage="/images/HotMealDay.jpg" opacity="20">
          <LargeHeroContent
            mainTextSize="lg"
            title={landingPageTitle}
            titleSize="5xl"
          >
            <p className="mb-5">{landingPageDescription}</p>

            <Link href="/in-kind" passHref>
              <a className="btn btn-accent rounded-btn" href="#">
                {'Feed A Family'}
              </a>
            </Link>
          </LargeHeroContent>
        </LargeHeroSection>
        <TestimonialSection testimonialCard={testimonialCard} />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
