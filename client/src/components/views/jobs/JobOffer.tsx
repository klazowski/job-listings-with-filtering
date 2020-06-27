import React, { Component } from 'react';

class JobOffer extends Component<{ offer: Offer; listKey: number }> {
  render(): JSX.Element {
    return (
      <li
        key={this.props.listKey}
        className={`job-offer ${
          this.props.offer.new ? 'job-offer--new' : ''
        } card`}
      >
        <div className="job-card__container">
          <img
            src={this.props.offer.logo}
            alt={`${this.props.offer.company} company logo`}
            className="company-logo"
          />
          <div className="job-card">
            <div className="job-card__header">
              <p className="company-name">{this.props.offer.company}</p>
              {this.props.offer.new ? (
                <div className="notification notification--new">New!</div>
              ) : null}
              {this.props.offer.featured ? (
                <div className="notification notification--featured">
                  Featured
                </div>
              ) : null}
            </div>
            <div className="job-card__position">
              <a href="#" className="job-position">
                {this.props.offer.position}
              </a>
            </div>
            <div className="job-card__details">
              <div className="job-card__detail job-card__detail--posted-at">
                {this.props.offer.postedAt}
              </div>
              <div className="job-card__detail job-card__detail--contract">
                {this.props.offer.contract}
              </div>
              <div className="job-card__detail job-card__detail--location">
                {this.props.offer.location}
              </div>
            </div>
          </div>
        </div>
        <ul
          className="filters__list available-filters"
          data-role={this.props.offer.role}
          data-level={this.props.offer.level}
          data-languages={this.props.offer.languages || ''}
          data-tools={this.props.offer.tools || ''}
        >
          <li className="filter">
            <button className="btn-add-filter filter__name">
              {this.props.offer.role}
            </button>
          </li>
          <li className="filter">
            <button className="btn-add-filter filter__name">
              {this.props.offer.level}
            </button>
          </li>
          {this.props.offer.languages
            ? this.props.offer.languages.map((language, idx) => {
                return (
                  <li className="filter" key={idx}>
                    <button className="btn-add-filter filter__name">
                      {language}
                    </button>
                  </li>
                );
              })
            : null}
          {this.props.offer.tools
            ? this.props.offer.tools.map((tool, idx) => {
                return (
                  <li className="filter" key={idx}>
                    <button className="btn-add-filter filter__name">
                      {tool}
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </li>
    );
  }
}

export default JobOffer;
