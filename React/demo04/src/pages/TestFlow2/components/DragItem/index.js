import React, { useState } from 'react';

import DragCard from './components/DragCard';
import { BasicItem, LoopItem } from '../../ItemConstantTags';

const initialState = [
  {
    $$typeof: BasicItem,
    text: '语句块1',
  },
  {
    $$typeof: BasicItem,
    text: '语句块2',
  },
  {
    $$typeof: LoopItem,
    text: '循环控制',
  },
];

export default () => {
  const [dragCard, setDragCard] = useState(initialState);
  return (
    <div className="dragger-editor-item">
      {dragCard.map((item, index) => (
        <DragCard item={item} />
      ))}
    </div>
  );
};
