import React from 'react'
import JobOffer from './JobOffer'

const JobOffersList = (props: { offers: Offer[]; addFilter: (filter: Filter) => void }): JSX.Element => {
  const offers = props.offers.map((offer: Offer) => {
    return <JobOffer offer={offer} key={offer._id} addFilter={props.addFilter} />
  })

  return (
    <ul className="job-offers" data-job-offers>
      {offers}
    </ul>
  )
}

export default JobOffersList
