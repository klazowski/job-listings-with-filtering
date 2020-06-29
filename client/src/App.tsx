import React, { useState, useEffect } from 'react';
import './css/style.min.css';

import JobOffersList from './components/views/jobs/JobOffersList';
import AppliedFilters from './components/views/jobs/AppliedFilters';

const App = (props: {}, AppState: {}): JSX.Element => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<Filter[]>([]);

  useEffect(() => {
    fetch('/api/job-offers')
      .then((response) => response.json())
      .then((result) => {
        setOffers(result as Offer[]);
      });
  }, []);

  const addFilterHandler = (filter: Filter): void => {
    if (!appliedFilters.includes(filter))
      setAppliedFilters([...appliedFilters, filter]);
    //updateOffersList();
  };

  const removeFiltersHandler = (filters: Filter[]): void => {
    setAppliedFilters(
      appliedFilters.filter((filter) => {
        return !filters.includes(filter);
      })
    );
  };

  const filteredOffers = offers.filter((offer) => {
    if (appliedFilters.length === 0) return true;

    return appliedFilters.every((filter) => {
      switch (filter.type) {
        case 'role':
          if (offer.role !== filter.name) return false;
          break;
        case 'level':
          if (offer.level !== filter.name) return false;
          break;
        case 'language':
          if (!offer.languages?.includes(filter.name)) return false;
          break;
        case 'tool':
          if (!offer.tools?.includes(filter.name)) return false;
          break;
      }
      return true;
    });
  });

  return (
    <div className="body">
      <header className="header"></header>
      <main className="main">
        <div className="container">
          {appliedFilters.length > 0 ? (
            <AppliedFilters
              appliedFilters={appliedFilters}
              removeFilters={removeFiltersHandler}
            />
          ) : null}
          <JobOffersList offers={filteredOffers} addFilter={addFilterHandler} />
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
