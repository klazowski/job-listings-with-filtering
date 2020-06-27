import React, { Component } from 'react';
import JobOffer from './JobOffer';

class JobOffersList extends Component<{ offers: Offer[] }> {
  offers = [1];
  render(): JSX.Element {
    return (
      <ul className="job-offers" data-job-offers>
        {this.props.offers.map((offer: Offer) => {
          return <JobOffer offer={offer} listKey={offer._id} />;
        })}
      </ul>
    );
  }
}

export default JobOffersList;
