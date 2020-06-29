import React, { useState, useEffect } from 'react';
import './css/style.min.css';

import JobOffersList from './components/views/jobs/JobOffersList';
import AppliedFilters from './components/views/jobs/AppliedFilters';

type AppState = {
  offers: Offer[];
};

const App = (props: {}, AppState: {}): JSX.Element => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/job-offers')
      .then((response) => response.json())
      .then((result) => {
        setOffers(result as Offer[]);
      });
  });

  const addFilterHandler = (filterName: string): void => {
    if (!appliedFilters.includes(filterName))
      setAppliedFilters([...appliedFilters, filterName]);
  };

  const removeFiltersHandler = (filters: string[]): void => {
    setAppliedFilters(
      appliedFilters.filter((filterName) => {
        return !filters.includes(filterName);
      })
    );
  };

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
          <JobOffersList offers={offers} addFilter={addFilterHandler} />
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
