import React from 'react';

const Home = ({ data }) => {

  console.log('--');
  console.log(data);

  return (
    <div className='home'>
      <div className="table-container" role="table" aria-label="Destinations">
        <div className="flex-table header" role="rowgroup">
          <div className="flex-row first" role="columnheader">age</div>
          <div className="flex-row" role="columnheader">favoriteColor</div>
          <div className="flex-row" role="columnheader">favoriteFruit</div>
          <div className="flex-row" role="columnheader">gender</div>
          <div className="flex-row" role="columnheader">name</div>
        </div>

        {
          data.map((item, index) =>{
            return (
              <div key={index} className="flex-table row" role="rowgroup">
                <div className="flex-row first" role="cell">{item.age}</div>
                <div className="flex-row" role="cell">{item.favoriteColor}</div>
                <div className="flex-row" role="cell">{item.favoriteFruit}</div>
                <div className="flex-row" role="cell">{item.gender}</div>
                <div className="flex-row" role="cell">{item.name}</div>
              </div>
            );
          })
        }

      </div>
    </div>
  );
};

export default Home;


