import React from 'react';
import Item from '../Item/Item';

// styles
import tierStyle from './Tier.module.scss';

interface TierProps {
  color: string,
  tier: string
}

const Tier = (props: TierProps) => {
  const { color, tier } = props;
  return (
    <div className={tierStyle.tier}>
      <div style={{ backgroundColor: color }} className={tierStyle.rank}>
        { tier }
      </div>
      <div className={tierStyle.content}>
        <Item  color={color} img="https://upload.wikimedia.org/wikipedia/commons/d/d0/Mnwomanskull.jpg" tooltip_text="First tooltip"/>
        <Item  color={color} img="https://upload.wikimedia.org/wikipedia/commons/d/d0/Mnwomanskull.jpg" tooltip_text="Second tooltip"/>
      </div>
    </div>
  );
}

export default Tier;
