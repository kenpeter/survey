import React from 'react';

const Home = ({ data }) => {

  console.log('--');
  console.log(data);

  return (
    <div className='home'>
      <div className="table-container" role="table" aria-label="Destinations">
        <div className="flex-table header" role="rowgroup">
          <div className="flex-row first" role="columnheader">age</div>
          <div className="flex-row" role="columnheader">favouriteColor</div>
          <div className="flex-row" role="columnheader">favouriteFruit</div>
          <div className="flex-row" role="columnheader">gender</div>
          <div className="flex-row" role="columnheader">name</div>
        </div>
        <div className="flex-table row" role="rowgroup">
          <div className="flex-row first" role="cell">United Kingdom</div>
          <div className="flex-row" role="cell">Stonehenge, Windsor and Bath with Pub Lunch</div>
          <div className="flex-row" role="cell">19 Sep, 1p.m.</div>
          <div className="flex-row" role="cell">US$500</div>
          <div className="flex-row" role="cell">US$500</div>
        </div>
        <div className="flex-table row" role="rowgroup">
          <div className="flex-row first" role="cell">Canada</div>
          <div className="flex-row" role="cell">Vancouver to Victoria and Butchart Gardens Tour</div>
          <div className="flex-row" role="cell">23 Sep, 1:30p.m.</div>
          <div className="flex-row" role="cell">US$387</div>
          <div className="flex-row" role="cell">US$500</div>
        </div>
      </div>
    </div>
  );
};

export default Home;


