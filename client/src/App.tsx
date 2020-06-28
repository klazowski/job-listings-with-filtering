import React, { useState, useEffect } from 'react';
import './css/style.min.css';

import JobOffersList from './components/views/jobs/JobOffersList';
import AppliedFilters from './components/views/jobs/AppliedFilters';

type AppState = {
  offers: Offer[];
};

const App = (props: {}, AppState: {}): JSX.Element => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([
    `Frontend1`,
    `CSS`,
    `JavaScript`,
  ]);

  useEffect(() => {
    fetch('/api/job-offers')
      .then((response) => response.json())
      .then((result) => {
        setOffers(result as Offer[]);
      });
  });

  return (
    <div className="body">
      <header className="header"></header>
      <main className="main">
        <div className="container">
          <AppliedFilters appliedFilters={appliedFilters} />
          <JobOffersList offers={offers} />
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
