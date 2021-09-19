// @ts-check
// eslint-disable-next-line no-unused-vars
import { ReactElement, useEffect, useState } from 'react'; // ReactElement is only imported for typechecking
import LandingPageNav from '../components/LandingPageNav';
import LargeHeroContent from '../components/LargeHeroContent';
import LargeHeroSection from '../components/LargeHeroSection';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';


/** -----------------------------------------------------------------------------------------------------------------------
 *
 * TODO: Change all of the placeholder text to good copy.
 * TODO: Change the call to action link to point to the appropriate destination.
 * TODO: Refactor code by exporting components to proper folders.
 *
 * FIXME: The images are placeholders and need to be changed.
 * FIXME: There's a better way to handle images as per @RedFox0x20 recommendation.
 *
 */ // --------------------------------------------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------------------------------------------
// TODO: Export LandingPageNav to components folder.
// FIXME: The commented out code is for @Audrey to decide whether or not she wants to use the links in the nav.
// -----------------------------------------------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------------------------------------------
// Export LandingPageNav end.
// -----------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------
// TODO: Export TestimonialCard to components folder or leave it here as it's not the most reusable component.
// FIXME: Find correct images for these cards and fix the sizing issues
// -----------------------------------------------------------------------------------------------------------------------

const TestimonialCard = ({ content, image, title }) => {
  return (
    <div className="m-5 w-72 h-96 card glass lg:card text-neutral-content">
      <figure className="p-0">
        <Image
          alt="testimonial"
          className="shadow-lg"
          height={340}
          layout="responsive"
          src={image}
          width={500}
        />
      </figure>
      <div className="max-w-md card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------------------------------------------------
// Export LandingPageNav end.
// -----------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------
// TODO: Export TestimonialSection to components folder or leave it here as it's not the most reusable component.
// -----------------------------------------------------------------------------------------------------------------------

const TestimonialSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-1/2 py-28">
      <div className="text-gray-500 text-2xl font-semibold pb-28">
        <h2>{'See What People Are Saying'}</h2>
      </div>
      <div
        className=" bg-gradient-to-r from-accent to-blue-400 shadow-md md:flex md:p-32 "
        id="cards-section"
      >
        <TestimonialCard
          content="We haven't met a more generous group of giving souls."
          image="/images/HealthWorkShop.jpg"
          title="Lovely People"
        />
        <TestimonialCard
          content="I couldn't be more pleased with the way I've been treated."
          image="/images/Volunteer.jpg"
          title="Very Happy"
        />
        <TestimonialCard
          content="I couldn't be more pleased with the way I've been treated."
          image="/images/Humanitarian.jpg"
          title="They Care"
        />
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------------------------------------------------
// Export TestimonialSection end.
// -----------------------------------------------------------------------------------------------------------------------

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>{'Help a Family in Need'}</title>
        <meta content={'Help a Family in Need'} name="description" />
        <link href="https://www.margaritahumanitarian.org/" rel="canonical" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LandingPageNav />
      <main className="justify-center">
        <LargeHeroSection bgImage="/images/HotMealDay.jpg" opacity="20">
          <LargeHeroContent
            mainTextSize="lg"
            title="Feed A Family Today"
            titleSize="5xl"
          >
            <p className="mb-5">
              {
                'Families are in need more than ever. The pandemic coupled with trying economic times has really put the less fortunate in a difficult position as they try to maintain a functioning household. Give what you can today to help raise up those in need.'
              }
            </p>

            <Link href="/in-kind">
              <a className="btn btn-accent rounded-btn">{'Feed A Family'}</a>
            </Link>
          </LargeHeroContent>
        </LargeHeroSection>
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
