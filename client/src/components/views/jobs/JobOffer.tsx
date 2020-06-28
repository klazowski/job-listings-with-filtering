import React from 'react';
import FilterButton from './FilterButton';

const JobOffer = (props: { offer: Offer; listKey: number }): JSX.Element => {
  return (
    <li
      key={props.listKey}
      className={`job-offer ${props.offer.new ? 'job-offer--new' : ''} card`}
    >
      <div className="job-card__container">
        <img
          src={props.offer.logo}
          alt={`${props.offer.company} company logo`}
          className="company-logo"
        />
        <div className="job-card">
          <div className="job-card__header">
            <p className="company-name">{props.offer.company}</p>
            {props.offer.new ? (
              <div className="notification notification--new">New!</div>
            ) : null}
            {props.offer.featured ? (
              <div className="notification notification--featured">
                Featured
              </div>
            ) : null}
          </div>
          <div className="job-card__position">
            <a href="#" className="job-position">
              {props.offer.position}
            </a>
          </div>
          <div className="job-card__details">
            <div className="job-card__detail job-card__detail--posted-at">
              {props.offer.postedAt}
            </div>
            <div className="job-card__detail job-card__detail--contract">
              {props.offer.contract}
            </div>
            <div className="job-card__detail job-card__detail--location">
              {props.offer.location}
            </div>
          </div>
        </div>
      </div>
      <ul
        className="filters__list available-filters"
        data-role={props.offer.role}
        data-level={props.offer.level}
        data-languages={props.offer.languages || ''}
        data-tools={props.offer.tools || ''}
      >
        <li className="filter">
          <button className="btn-add-filter filter__name">
            {props.offer.role}
          </button>
        </li>
        <li className="filter">
          <button className="btn-add-filter filter__name">
            {props.offer.level}
          </button>
        </li>
        {props.offer.languages
          ? props.offer.languages.map((language, idx) => {
              return (
                <li className="filter" key={`language_${idx}`}>
                  <FilterButton filterName={language} />
                </li>
              );
            })
          : null}
        {props.offer.tools
          ? props.offer.tools.map((tool, idx) => {
              return (
                <li className="filter" key={`tool_${idx}`}>
                  <FilterButton filterName={tool} />
                </li>
              );
            })
          : null}
      </ul>
    </li>
  );
};

export default JobOffer;
