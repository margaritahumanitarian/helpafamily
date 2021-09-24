import React from 'react';
import { capitalize } from '../utils';

function Card(props) {
  const {
    data: { header, donation },
  } = props;
  const { donor } = donation;
  const fullName = `${donor.name} ${donor.middlename} ${donor.surname}`;

  return (
    <div className="card shadow-xl p-4 mt-5">
      <div className="grid-container grid grid-cols-8">
        <div className="item1 col-span-3">
          <div className="-mt-1">
            <p className="font-semibold text-2xl">{header.title}</p>
            <p className="font-semibold text-xl mt-2 txt-orange">
              {header.subtitle}
            </p>
            <div className="w-6 border-t-4 border-black my-3" />

            <div className="text-sm">
              <p className="font-semibold">
                {'EIN:'} {header.ein}
              </p>
              <p>{header.address.street}</p>
              <p>{header.address.place}</p>
              <p>{header.address.city}</p>
              <p className="txt-orange mt-1">{header.phone}</p>
              <p className="txt-orange">{header.email}</p>
            </div>
          </div>
        </div>
        <div className="item2 col-span-5">
          <div className="border-t-4 border-black pt-6 text-sm">
            <p className="font-semibold my-6">
              {'501(c)(3)Organization Donation Receipt'}
            </p>
            <p className="font-semibold">{'Donation Date'}</p>
            <p className="mb-4">{donation.date}</p>
            <p className="font-semibold">{"Donor's Name"}</p>
            <p className="mb-4">{fullName}</p>
            <p className="font-semibold">{"Donor's Mailing Address"}</p>
            <p>{donor.address.street}</p>
            <p>{donor.address.place}</p>
            <p className="mb-4">{donor.address.city}</p>
            <p className="font-semibold">{"Donor's Phone"}</p>
            <p className="mb-4">{donor.phone}</p>
            <p className="font-semibold">{'Donation Value'}</p>
            <p className="mb-4">{`$ ${donation.value}`}</p>
            <p className="font-semibold">{'Donation Description'}</p>
            <p className="mb-2">{`${capitalize(donation.payment)} for $ ${
              donation.value
            } from ${fullName}`}</p>
            <p className="mb-4">{donation.disclaimer}</p>
            <p className="mb-2">
              {
                'Furthermore, as of the date of this receipt the above-mentioned organization is a current and valid 501(c)(3) non-profit organization in accordance with the standards and regulations of the Internal Revenue Service (IRS).'
              }
            </p>
            <p className="mb-8">{'Sincerely,'}</p>
            <p className="font-semibold mb-4">{'Your Full Name Here'}</p>
            <p className="mb-2">
              {'Thank you for your generosity. We appreciate your support!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
