// @ts-check
// eslint-disable-next-line no-unused-vars
import { ReactElement, useEffect, useState } from 'react'; // ReactElement is only imported for typechecking
import LargeHeroSection from '../components/LargeHeroSection';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

// import { BsSearch } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

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
// TODO: Export LargeHeroContent to components folder.
// -----------------------------------------------------------------------------------------------------------------------

/**
 * ## Large Hero Content
 * This is the call to action and content of the `LargeHeroSection` component.
 *
 * ### Modify using tailwind classes or css
 * - `titleSize` : "text-`titleSize`" | Example: `"5xl"` | [Tailwind text sizes](https://tailwindcss.com/docs/font-size)
 * - `mainTextSize` : "max-w-`mainSize`" | [Tailwind max-width sizes](https://tailwindcss.com/docs/max-width)
 *
 * @param {Object} props - { mainTextSize, title, titleSize, fadeInSpeed }
 * @param {String} [props.mainTextSize = 'md'] - change the size of main section "max-w-`mainSize`" | [Tailwind max-width sizes](https://tailwindcss.com/docs/max-width)
 * @param {String} [props.fadeInSpeed = '700'] - change the speed of fade in "duration-`fadeInSpeed`" | Example: `700"`
 * @param {String} props.title - The title of the hero section
 * @param {String} [props.titleSize = '5xl'] - "text-`titleSize`" | Example: `"5xl"` | [Tailwind text sizes](https://tailwindcss.com/docs/font-size)
 * @param {*} props.children - The content of the hero section
 * @returns {ReactElement} JSX
 */

const LargeHeroContent = ({
  children,
  fadeInSpeed = '700',
  mainTextSize = 'md',
  title,
  titleSize = '5xl',
}) => {
  const [opacityAmount, setOpacityAmount] = useState(0);
  useEffect(() => {
    setOpacityAmount(1);
  }, []);
  return (
    <div
      className={`text-center hero-content text-neutral-content opacity-${opacityAmount} transition ease-in duration-${fadeInSpeed}`}
    >
      <div className={`max-w-${mainTextSize}`}>
        <h1 className={`mb-6 text-${titleSize} font-bold`}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

LargeHeroContent.propTypes = {
  children: PropTypes.node,
  fadeInSpeed: PropTypes.string,
  mainTextSize: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleSize: PropTypes.string,
};

// -----------------------------------------------------------------------------------------------------------------------
// Export LargeHeroContent end.
// -----------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------
// TODO: Export LandingPageNav to components folder.
// FIXME: The commented out code is for @Audrey to decide whether or not she wants to use the links in the nav.
// -----------------------------------------------------------------------------------------------------------------------

/**
 * ### Landing Page Nav Bar
 * This component is used to create the nav bar for the landing page which has opacity and fade in options to work in conjunction with the `LargeHeroSection` component.
 *
 * fadeInSpeed - change the speed of fade in "ease-in duration-`fadeInSpeed`" | Example: `"700"` : [tailwind durations](https://tailwindcss.com/docs/transition-duration)
 *
 * @param {Object} props - { fadeInSpeed }
 * @param {String} [props.fadeInSpeed = '700' ] - change the speed of fade in "ease-in duration-`fadeInSpeed`" | Example: `"700"` : [tailwind durations](https://tailwindcss.com/docs/transition-duration)
 * @returns {ReactElement} JSX
 */
const LandingPageNav = ({ fadeInSpeed = '700' }) => {
  const [navOpacity, setnavOpacity] = useState(0);
  useEffect(() => {
    setnavOpacity(100);
  }, []);
  return (
    <>
      <div
        className={`fixed h-20 nav-bar mb-2 shadow-lg text-neutral-content flex justify-between items-center top-0 left-0 right-0 z-50 opacity-${navOpacity} ease-in duration-${fadeInSpeed}`}
      >
        <div className="flex-none px-6 mx-2">
          <span className="text-lg font-bold">
            {'Margarita Humanitarian Foundation'}
          </span>
        </div>
        {/* <div className="px-2 mx-2 hidden md:flex flex-grow "> */}
        {/* <div className="items-stretch hidden lg:flex">
              <Link href="/">
                <a className="btn btn-ghost btn-sm rounded-btn">{'Home'}</a>
              </Link>
              <Link href="/in-kind">
                <a className="btn btn-ghost btn-sm rounded-btn">{'In-Kind'}</a>
              </Link>
              <Link href="/fund">
                <a className="btn btn-ghost btn-sm rounded-btn">{'Fund'}</a>
              </Link>
              <Link href="/give-your-time">
                <a className="btn btn-ghost btn-sm rounded-btn">
                  {'Give Your Time'}
                </a>
              </Link>
              <Link href="/partner-with-us">
                <a className="btn btn-ghost btn-sm rounded-btn">
                  {'Partner With Us'}
                </a>
              </Link>
            </div> */}
        {/* </div> */}
        <div className="flex items-center">
          <div className="pr-7 hidden md:block">{' Help Families in Need'}</div>
          <div className="flex-row hidden sm:flex">
            <button className="btn btn-square btn-ghost pr-6" type="button">
              <FaRegHeart className="inline-block w-5 h-5 stroke-current" />
            </button>
          </div>
        </div>

        {/* <div className="flex-none hidden sm:flex">
            <button className="btn btn-square btn-ghost" type="button">
              <BsSearch className="inline-block w-5 h-5 stroke-current" />
            </button>
          </div> */}
      </div>
    </>
  );
};

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
