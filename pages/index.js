import Head from 'next/head'
import Image from 'next/Image'

function Form(){
  return (

    <div className="p-6 card bordered bg-base-100">
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Health Equity for People of Color</span> 
          <input type="radio" name="cause" className="radio radio-primary" value="health"></input>
        </label>
      </div> 
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Immigrants in Need</span> 
          <input type="radio" name="cause" className="radio radio-primary" value="immigrants"></input>
        </label>
      </div> 
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Students in Need</span> 
          <input type="radio" name="cause" className="radio radio-primary" value="students"></input>
        </label>
      </div>    

      <select className="select select-bordered select-info w-full max-w-xs text-blue-700">
        <option disabled="disabled" selected="selected">Choose your donation amount</option> 
        <option>$75</option> 
        <option>$125</option> 
        <option>$250</option> 
        <option>$500</option> 
        <option>$1000</option> 
        <option>$5000</option> 
      </select>    

      <div className="divider"></div> 

      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Monthly Recurring?</span> 
          <input type="checkbox" className="checkbox checkbox-primary"></input>
        </label>
      </div>  

      <button className="btn btn-primary">Donate</button>
    </div>    
  )
}


export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Donate to MHF Cares</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-- Hero --> */}
      <div className="hero min-h-screen" style={{backgroundImage:"url(" + "/images/marguerite_960_720.webp" + ")"}}>
        <div className="hero-overlay bg-opacity-60"></div> 
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
                  Donate
                </h1> 
            <p className="mb-5">
            Kindness First. Margarita Humanitarian Foundation helps those who need help the most. 
                </p> 
            {/* <a className="btn btn-primary">Donate</a> */}
            <Form></Form>
          </div>
        </div>
      </div>







    </div>
  )
}