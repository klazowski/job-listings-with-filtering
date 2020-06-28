import React, { Component } from 'react';
import './css/style.min.css';

import JobOffersList from './components/views/jobs/JobOffersList';
import AppliedFilters from './components/views/jobs/AppliedFilters';

type AppState = {
  offers: Offer[];
};

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      offers: [],
    };
  }

  componentDidMount() {
    fetch('/api/job-offers')
      .then((response) => response.json())
      .then((result) => {
        this.setState({ offers: result as Offer[] });
      });
  }

  render(): JSX.Element {
    return (
      <div className="body">
        <header className="header"></header>
        <main className="main">
          <div className="container">
            <AppliedFilters />
            <JobOffersList offers={this.state.offers} />
          </div>
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
