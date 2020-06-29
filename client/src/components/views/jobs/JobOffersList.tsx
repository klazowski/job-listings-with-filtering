import React from 'react';
import JobOffer from './JobOffer';

const JobOffersList = (props: {
  offers: Offer[];
  addFilter: (filterName: string) => void;
}): JSX.Element => {
  return (
    <ul className="job-offers" data-job-offers>
      {props.offers.map((offer: Offer) => {
        return (
          <JobOffer offer={offer} key={offer._id} addFilter={props.addFilter} />
        );
      })}
    </ul>
  );
};

export default JobOffersList;
