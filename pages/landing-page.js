import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// import { BsSearch } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';

// -----------------------------------------------------------------------------------------------------------------------
// TODO: Export LargeHeroSection to components folder.
// -----------------------------------------------------------------------------------------------------------------------

/**
 * ## Large Hero Section
 * This component is the main `LargeHeroSection` component.
 *
 * ### Modify using tailwind classes or css
 * - `opacity` : "bg-opacity-`opacity`" | Example: `"30"` | [Tailwind opacity](https://tailwindcss.com/docs/background-opacity)
 * - `heroHeight` : Use standard css (vh | px | %) :  Example: `"70vh"`
 *
 * @param {Object} props - bgImage, mainTextSize, opacity, title, titleSize
 * @param {String} props.bgImage - Background image url
 * @param {String} props.heroHeight Use standard css (vh | px | %) :  Example: `"70vh"`
 * @param {String} props.opacity "bg-opacity-`opacity`" | Example: `"30"` | [Tailwind opacity](https://tailwindcss.com/docs/background-opacity)
 * @returns {JSX} JSX
 */

const LargeHeroSection = ({
  bgImage,
  children,
  heroHeight = '100vh',
  opacity = '60',
}) => {
  return (
    <>
      <div className="hero min-height background">
        <div className={`hero-overlay bg-opacity-${opacity}`} />
        {children}
      </div>
      <style jsx>{`
        .background {
          background-image: url(${bgImage});
        }
        .min-height {
          height: ${heroHeight};
        }
        @media (max-width: 768px) {
          .hero {
            height: 100vh;
          }
        }
      `}</style>
    </>
  );
};

LargeHeroSection.propTypes = {
  children: PropTypes.node,
  bgImage: PropTypes.string.isRequired,
  heroHeight: PropTypes.string,
  opacity: PropTypes.string,
};

// -----------------------------------------------------------------------------------------------------------------------
// Export End.
// -----------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------
// TODO: Export LargeHeroContent to components folder.
// -----------------------------------------------------------------------------------------------------------------------

/**
 * ## Large Hero Content
 * This component goes full width and height of the page by default. Modify with props.
 *
 * ### Modify using tailwind classes or css
 * - `titleSize` : "text-`titleSize`" | Tailwind text sizes => https://tailwindcss.com/docs/font-size
 * - `mainTextSize` : "max-w-`mainSize`" | Tailwind max-width sizes => https://tailwindcss.com/docs/max-width
 *
 * @param {Object} props - bgImage, mainTextSize, opacity, title, titleSize
 * @param {String} props.mainTextSize - change the size of main section "max-w-`mainSize`" | Tailwind max-width sizes => https://tailwindcss.com/docs/max-width
 * @param {String} props.fadeInSpeed - change the speed of fade in "ease-in-out-`fadeInSpeed`" | Example: `"0.8s"`
 * @param {String} props.title - The title of the hero section
 * @param {String} props.titleSize - "text-`titleSize`" | Example: `"5xl"` Tailwind text sizes => https://tailwindcss.com/docs/font-size
 * @returns {JSX} JSX
 */

const LargeHeroContent = ({
  children,
  fadeInSpeed = '0.8s',
  mainTextSize = 'md',
  title,
  titleSize = '5xl',
}) => {
  const [fadeIn, setFadeIn] = useState(0);
  useEffect(() => {
    setFadeIn(1);
  }, []);
  return (
    <div className="text-center hero-content text-neutral-content fade-in">
      <div className={`max-w-${mainTextSize}`}>
        <h1 className={`mb-6 text-${titleSize} font-bold`}>{title}</h1>
        {children}
      </div>
      <style jsx>{`
        .fade-in {
          opacity: ${fadeIn};
          transition: ease-in-out ${fadeInSpeed};
        }
        @media (max-width: 768px) {
          .hero-content {
            padding-top: 0;
            height: 100vh;
          }
        }
      `}</style>
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
// -----------------------------------------------------------------------------------------------------------------------

/**
 * ### Landing Page Nav Bar
 * This component is used to create the nav bar for the landing page which has opacity and fade in options to work in conjunction with the `LargeHeroSection` component.
 * @param {Object} props - fadeInSpeed
 * @param {String} props.fadeInSpeed - change the speed of fade in "ease-in-out-`fadeInSpeed`" | Example: `"0.8s"`
 * @returns {JSX} JSX
 */
const LandingPageNav = ({ fadeInSpeed = '1.5s' }) => {
  const [navOpacity, setnavOpacity] = useState(0);
  useEffect(() => {
    setnavOpacity(1);
  }, []);
  return (
    <>
      <div className="nav-area">
        <div className="nav-bar mb-2 shadow-lg bg-neutral text-neutral-content justify-center sticky top-0 z-50">
          <div className="flex-none px-6 mx-2">
            <span className="text-lg font-bold">
              {'Margarita Humanitarian Foundation'}
            </span>
          </div>
          <div className="flex-1 px-2 mx-2 hidden md:flex">
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
          </div>
          <div className="pr-7 hidden">{' Help Families in Need'}</div>
          <div className="flex-row hidden sm:flex">
            <button className="btn btn-square btn-ghost pr-6" type="button">
              <FaRegHeart className="inline-block w-5 h-5 stroke-current" />
            </button>
          </div>

          {/* <div className="flex-none hidden sm:flex">
            <button className="btn btn-square btn-ghost" type="button">
              <BsSearch className="inline-block w-5 h-5 stroke-current" />
            </button>
          </div> */}
        </div>
      </div>
      <style jsx>{`
        .hidden {
          display: block;
        }
        .nav-bar {
          opacity: ${navOpacity};
          background-color: #2159633d !important;
          box-shadow: 0 0.3px 7.2px 0px rgba(0, 0, 0, 0.12);
          z-index: 1;
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          top: ${navOpacity ? navOpacity - 1 : -3}rem;
          left: 0;
          right: 0;
          height: 73px;
          transition: all ${fadeInSpeed} ease-in-out;
        }
        @media (max-width: 768px) {
          .nav-bar {
            top: 0;
          }
          .hidden {
            display: none;
          }
        }
      `}</style>
    </>
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
    <section className="testimonial-section">
      <div className="section-title">
        <h2>{'See What People Are Saying'}</h2>
      </div>
      <div className="cards">
        <div className="testimonial-card">
          <div className="card glass lg:card text-neutral-content">
            <figure className="p-0">
              <Image
                alt="testimonial"
                className="shadow-lg"
                height={340}
                layout="responsive"
                src="/images/HealthWorkShop.jpg"
                width={500}
              />
            </figure>
            <div className="max-w-md card-body">
              <h2 className="card-title">{'Lovely People'}</h2>
              <p>{"We haven't met a more generous group of giving souls."}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card glass lg:card text-neutral-content">
            <figure className="p-0">
              <Image
                alt="testimonial"
                className="shadow-lg"
                height={340}
                layout="responsive"
                src="/images/Volunteer.jpg"
                width={500}
              />
            </figure>
            <div className="max-w-md card-body">
              <h2 className="card-title">{'Very Happy'}</h2>
              <p>
                {"I couldn't be more pleased with the way I've been treated."}
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="card glass lg:card text-neutral-content">
            <figure className="p-0">
              <Image
                alt="testimonial"
                className="shadow-lg"
                height={340}
                layout="responsive"
                src="/images/Humanitarian.jpg"
                width={500}
              />
            </figure>
            <div className="max-w-md card-body">
              <h2 className="card-title">{'They Care'}</h2>
              <p>
                {"I couldn't be more pleased with the way I've been treated."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .testimonial-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 1300px;
          padding: 10px;
        }
        .cards {
          background: linear-gradient(
            90deg,
            rgba(91, 164, 167, 0.699) 0%,
            rgba(206, 117, 66, 0.336) 100%
          );
          padding: 70px;
          display: flex;
          align-items: flex-end;
          height: 600px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2),
            0 2px 3px rgba(0, 0, 0, 0.2);
        }
        .testimonial-card {
          display: flex;
          width: 350px;
          height: 600px;
          overflow: scroll;
          margin: 20px;
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
        .section-title {
          color: #0d2529b4;
          font-size: 2.5rem;
          font-weight: 500;
          padding-bottom: 200px;
        }

        @media (max-width: 768px) {
          .testimonial-section {
            height: auto;
            padding: 100px 0;

            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .cards {
            flex-direction: column;
            height: auto;
            padding: 0;
          }
          .testimonial-card {
            width: 100%;
            height: 500px;
            margin: 0;
            border-radius: 0;
            box-shadow: none;
          }
          .section-title {
            font-size: 1.5rem;
            padding-bottom: 50px;
          }
        }
      `}</style>
    </section>
  );
};

// -----------------------------------------------------------------------------------------------------------------------
// Export TestimonialSection end.
// -----------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------
// Main Component for this page lives here.
// -----------------------------------------------------------------------------------------------------------------------

const LandingPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{'Help a Family in Need'}</title>
        <meta content={'Help a Family in Need'} name="description" />
        <link href="https://www.margaritahumanitarian.org/" rel="canonical" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LandingPageNav fadeInSpeed="1.5s" />
      <main className="body">
        <LargeHeroSection
          bgImage="/images/HotMealDay.jpg"
          heroHeight="85vh"
          opacity="20"
        >
          <LargeHeroContent
            fadeInSpeed="0.8s"
            mainTextSize="lg"
            title="Feed A Family Today"
            titleSize="5xl"
          >
            <p className="mb-5">
              {
                'Families are in need more than ever. The pandemic coupled with trying economic times has really put the less fortunate in a difficult position as they try to maintain a functioning household. Give what you can today to help raise up those in need.'
              }
            </p>

            <button
              className="btn btn-accent rounded-full shadow-lg"
              onClick={() => router.push('/in-kind')}
              type="button"
            >
              {'Help Today'}
            </button>
          </LargeHeroContent>
        </LargeHeroSection>
        <TestimonialSection />

        <style jsx>{`
          .body {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
