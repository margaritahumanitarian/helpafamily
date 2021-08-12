import Head from "next/head"
import HygieneKitsCard from "../components/HygieneKitsCard"
import MainDonationForm from "./MainDonationForm"
import React, { useState } from "react";
import HealthWorkshopCard from "./HealthWorkshopCard";
import HotMealDayCard from "./HotMealDayCard";

export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Donate to Margarita Humanitarian Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-- Hero --> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(" + "/images/marguerite_960_720.webp" + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Help Families in Need</h1>
            <p className="mb-5">
              Kindness First. Margarita Humanitarian Foundation helps those who
              need help the most.
            </p>
            {/* <a className="btn btn-primary">Donate</a> */}
            <MainDonationForm></MainDonationForm>
            <HygieneKitsCard></HygieneKitsCard>
            <br></br>
            <HealthWorkshopCard></HealthWorkshopCard>
            <br></br>
            <HotMealDayCard></HotMealDayCard>
          </div>
        </div>
      </div>
    </div>
  );
}
