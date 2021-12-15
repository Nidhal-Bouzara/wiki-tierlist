import React from 'react';

// components
import Tier from './components/Tier/Tier';

// styles
import listStyle from './TierList.module.scss';

const TierList = () => {

  const tier_data = [
    { color: "#FD7274", tier: "S" },
    { color: "#FFB875", tier: "A" },
    { color: "#FEFF7D", tier: "B" },
    { color: "#B7FE7B", tier: "C" },
    { color: "#74FF7C", tier: "D" },
    { color: "#72FFFD", tier: "E" },
  ];

  return (
    <div className={listStyle.container}>
      {
        tier_data.map(tier => (
          <Tier {...tier} />
        ))
      }
    </div>
  );
}

export default TierList;
