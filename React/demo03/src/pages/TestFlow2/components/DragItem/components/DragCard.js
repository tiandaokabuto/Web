import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from '../../../ItemTypes';

export default ({ item }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      effectTag: 'new',
      $$typeof: item.$$typeof,
      text: item.text,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(ref);
  return <div ref={ref}>{item.text}</div>;
};
