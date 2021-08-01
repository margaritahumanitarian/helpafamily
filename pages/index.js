import Head from 'next/head'
import Image from 'next/Image'

export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Donate to MHF Cares</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-- Hero --> */}
      <div className="hero min-h-screen" style={{backgroundImage:"url(" + "/images/1400.jpg" + ")"}}>
        <div className="hero-overlay bg-opacity-60"></div> 
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
                  Donate
                </h1> 
            <p className="mb-5">
            Kindness First. Margarita Humanitarian Foundation helps those who need help the most. 
                </p> 
            <a className="btn btn-primary">Donate</a>
          </div>
        </div>
      </div>







    </div>
  )
}