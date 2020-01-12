import React, { useRef, useState, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import cloneDeep from 'lodash/cloneDeep';
import useDebounce from 'react-hook-easier/lib/useDebounce';

import { BasicItem } from '../ItemConstantTags';
import ItemTypes from '../ItemTypes';
const style = {
  // border: '1px dashed gray',
  borderTop: '4px solid transparent',
  borderBottom: '4px solid transparent',
  padding: '0.5rem 1rem',
  // marginBottom: '.5rem',
  backgroundColor: 'white',
  backgroundClip: 'padding-box',
  cursor: 'move',
  position: 'relative',
};
const Card = props => {
  const {
    id,
    text,
    index,
    moveCard,
    addCard,
    isDraggingNode,
    setIsDraggingNode,
  } = props;
  /**
   * 可插入状态类
   */
  const [className, setClassName] = useState('');

  const resetClassName = useCallback(
    useDebounce(() => {
      setClassName('');
    }, 50),
    [setClassName]
  );

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      const hoverIndex = index;

      if (item.effectTag === 'new') {
        if (hoverClientY < hoverMiddleY) {
          setClassName('cursor__before');
          resetClassName();
        } else {
          setClassName('cursor__after');
          resetClassName();
        }
        return;
      }

      const dragIndex = item.index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      if (isDraggingNode.id !== item.id) return;

      // Time to actually perform the action
      moveCard(item, props.card);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
    drop(item, monitor) {
      if (!ref.current) {
        return;
      }
      if (item.effectTag === 'new') {
        addCard(
          index === 'symbol(tail)'
            ? index
            : className === 'cursor__before'
            ? index
            : index + 1,
          id,
          item
        );
      }
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, ...cloneDeep(props.card) },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    begin(monitor) {
      setIsDraggingNode(props);
    },
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity: opacity }} className={className}>
      {text}
      <div className="card-mask"></div>
    </div>
  );
};
export default Card;
