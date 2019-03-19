import React from 'react';

const Home = ({ data, favoriteColorChange, favoriteFruitChange, genderChange, state }) => {

  return (
    <div className='home'>
      <div className="filter">
        <select className="favoriteColor" value={state.favoriteColor} onChange={favoriteColorChange}>
          <option value="purple">purple</option>
          <option value="turquoise">turquoise</option>
          <option value="aquamarine">aquamarine</option>
        </select>

        <select className="favoriteFruit" value={state.favoriteFruit} onChange={favoriteFruitChange}>
          <option value="mango">mango</option>
          <option value="banana">banana</option>
          <option value="lychee">lychee</option>
        </select>

        <select className="gender" value={state.gender} onChange={genderChange}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <button>Filter</button>
      </div>

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


