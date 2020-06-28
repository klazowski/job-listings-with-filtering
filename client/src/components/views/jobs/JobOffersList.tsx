import React from 'react';
import JobOffer from './JobOffer';

const JobOffersList = (props: { offers: Offer[] }): JSX.Element => {
  return (
    <ul className="job-offers" data-job-offers>
      {props.offers.map((offer: Offer) => {
        return <JobOffer offer={offer} listKey={offer._id} />;
      })}
    </ul>
  );
};

export default JobOffersList;
