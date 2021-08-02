import Head from 'next/head'
import React, { useState } from 'react';
import { useRouter } from 'next/router'

const donationTypes = {
  equity: {donations: {75: '', 125: '', 250: '', 500: '', 1000: '', 5000: ''}, recurringDonations: {75: '', 125: '', 250: '', 500: '', 1000: '', 5000: ''}},
  immigrants: {donations: {75: 'https://buy.stripe.com/test_aEUeVa0Ks4bg5vG00d', 125: 'https://buy.stripe.com/test_eVa5kAal2gY29LW3ci', 250: 'https://buy.stripe.com/test_3cs9AQctaazEf6gdQX', 500: 'https://buy.stripe.com/test_00g5kA2SA37c5vG28d', 1000: 'https://buy.stripe.com/test_dR6cN2al2cHM3nybIM', 5000: 'https://buy.stripe.com/test_dR628octadLQ9LW28b'}, recurringDonations: {75: 'https://buy.stripe.com/test_8wM4gw78QgY2aQ06oA', 125: 'https://buy.stripe.com/test_5kAcN20KsdLQ3nybIT', 250: 'https://buy.stripe.com/test_7sI4gw50I37cbU44gq', 500: 'https://buy.stripe.com/test_aEUdR6eBi7nsbU4dQZ', 1000: 'https://buy.stripe.com/test_bIY7sI3WE8rw1fq28g', 5000: 'https://buy.stripe.com/test_bIY5kAfFm8rwaQ0aET'}},
  students: {donations: {75: '', 125: '', 250: '', 500: '', 1000: '', 5000: ''}, recurringDonations: {75: '', 125: '', 250: '', 500: '', 1000: '', 5000: ''}},
}



function Form(){
  const [donation, setDonation] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let paymentUrl = ""
    if (event.target.recurring.checked) {
      // TODO recurring
      console.log(donationTypes[event.target.cause.value].recurringDonations)
      paymentUrl = donationTypes[event.target.cause.value].recurringDonations[event.target.amount.value]
    } else {
      // TODO 1-time payment
      console.log(donationTypes[event.target.cause.value].donations[event.target.amount.value])
      paymentUrl = donationTypes[event.target.cause.value].donations[event.target.amount.value]
    }
    console.log(paymentUrl)
    const router = useRouter()
    router.push(paymentUrl)

    // return {
    //   amount: event.target.cause.value,
    //   cause: event.target.cause.value,
    //   paymentUrl
    // }
  }  

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6 card bordered bg-base-100">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Health Equity for People of Color</span> 
            <input type="radio" name="cause" className="radio radio-primary" value="equity"
            ></input>
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

        <select name="amount" className="select select-bordered select-info w-full max-w-xs text-blue-700">
          <option disabled="disabled" selected="selected">Choose your donation amount</option> 
          <option value="75">$75</option> 
          <option value="125">$125</option> 
          <option value="250">$250</option> 
          <option value="500">$500</option> 
          <option value="1000">$1000</option> 
          <option value="5000">$5000</option> 
        </select>    

        <div className="divider"></div> 

        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Monthly Recurring?</span> 
            <input type="checkbox" name="recurring" className="checkbox checkbox-primary"></input>
          </label>
        </div>  

        <button className="btn btn-primary">Donate <span></span></button>
      </div>   
    </form> 
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