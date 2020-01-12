import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import DragContainer from './components/DragContainer';
import DragItem from './components/DragItem';

import './index.less';

export default () => {
  return (
    <DndProvider backend={Backend}>
      <div className="dragger-editor">
        <DragItem />
        <DragContainer />
      </div>
    </DndProvider>
  );
};
