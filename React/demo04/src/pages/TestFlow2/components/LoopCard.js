import React, { useRef, useState, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import cloneDeep from 'lodash/cloneDeep';
import useDebounce from 'react-hook-easier/lib/useDebounce';
import Card from './Card';
import ItemTypes from '../ItemTypes';
import { LoopItem } from '../ItemConstantTags';

import './LoopCard.less';

const style = {
  // border: '1px dashed gray',
  borderTop: '4px solid transparent',
  borderBottom: '4px solid transparent',
  // padding: '0.5rem 1rem',
  // marginBottom: '.5rem',
  backgroundColor: 'white',
  backgroundClip: 'padding-box',
  // paddingBottom: '10px',
  cursor: 'move',
  position: 'relative',
};

const ReconcileChildren = props => {
  const {
    id,
    text,
    card,
    index,
    moveCard,
    addCard,
    isDraggingNode,
    setIsDraggingNode,
  } = props;
  const ref = useRef(null);

  const [className, setClassName] = useState('');

  const resetClassName = useCallback(
    useDebounce(() => {
      setClassName('');
    }, 50),
    [setClassName]
  );

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
      console.log('isDraggingNode.id', isDraggingNode.id);
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
      // 通知全局当前的结点开始拖动，所有子结点均不能作为拖动结点使用
      setIsDraggingNode(props);
    },
  });

  drag(drop(ref));
  const opacity = isDragging ? 0 : 1;
  return (
    <div style={{ ...style, opacity }} className="loopitem" ref={ref}>
      <div className="loopitem-header">循环当 真 时</div>
      <div className="loopitem-content">
        {card.children.map((subChildren, i) => {
          if (subChildren.children) {
            return (
              <ReconcileChildren
                key={subChildren.id}
                id={`${subChildren.id}`}
                card={subChildren}
                moveCard={moveCard}
                addCard={addCard}
                isDraggingNode={isDraggingNode}
                setIsDraggingNode={setIsDraggingNode}
              />
            );
          }
          return (
            <Card
              key={subChildren.id}
              id={subChildren.id} // 很主要的一个地方 千万不能写成subChildren.id 同时一定要写成 i + 1 所有的id都不可能为0保持同步
              text={subChildren.text}
              index={i}
              moveCard={moveCard}
              card={subChildren}
              addCard={addCard}
              isDraggingNode={isDraggingNode}
              setIsDraggingNode={setIsDraggingNode}
            />
          );
        })}
        <Card
          id={`${id}-tail`} // 末尾已经有0的情况下不应该重复添加
          text="在此插入循环语句"
          index={'symbol(tail)'}
          moveCard={moveCard}
          addCard={addCard}
          card={{}}
          isDraggingNode={isDraggingNode}
          setIsDraggingNode={setIsDraggingNode}
        />
      </div>
    </div>
  );
};

export default ReconcileChildren;
