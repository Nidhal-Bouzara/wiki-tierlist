import React from 'react';
import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip';

// styles
import itemStyle from './Item.module.scss';

interface ItemProps {
  color: string
  img?: string
  alt?: string
  title?: string // in case image doesn't exist.
  tooltip_text: string
}

const Item = (props: ItemProps) => {
  const tooltip = useTooltipState({ placement: 'bottom' });
  const { color, img, alt, title, tooltip_text } = props;
  return (
    <>
        <TooltipReference {...tooltip} as="button" style={{ borderColor: `${color}99` }} className={itemStyle.item} >
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Mnwomanskull.jpg" alt="" />
        </TooltipReference>
        <Tooltip {...tooltip} className={itemStyle.tooltip} >{tooltip_text}</Tooltip>
    </>
  );
}

export default Item;
