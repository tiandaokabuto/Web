import React, { useState, useCallback } from 'react';
import uniqueId from 'lodash/uniqueId';
import Card from '../Card';
import LoopCard from '../LoopCard';
import { BasicItem, LoopItem } from '../../ItemConstantTags';
import {
  findCurrentLevelNode,
  useNode,
  transformIds,
  trimId,
  findNodeLevelById,
  isChildrenNode,
} from '../../utils';
import cloneDeep from 'lodash/cloneDeep';
import update from 'immutability-helper';
const style = {
  width: 600,
  padding: 10,
};

const Container = () => {
  {
    const [isDraggingNode, setIsDraggingNode] = useState({});

    const [cards, setCards] = useState([
      {
        id: '1',
        $$typeof: BasicItem,
        text: 'Write a cool JS library',
      },
      {
        id: '2',
        $$typeof: BasicItem,
        text: 'Make it generic enough',
      },
      {
        id: '3',
        $$typeof: BasicItem,
        text: 'Write README',
      },
      {
        id: '4',
        $$typeof: BasicItem,
        text: 'Create some examples',
      },
      {
        id: '5',
        $$typeof: BasicItem,
        text:
          'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: '6',
        $$typeof: BasicItem,
        text: '???',
      },
      {
        id: '7',
        $$typeof: BasicItem,
        text: 'PROFIT',
      },
    ]);
    const moveCard = useCallback(
      (dragItem, hoverItem) => {
        console.log('moveCard', dragItem, hoverItem, cards);
        // console.log('isChildrenNode', isChildrenNode(dragItem, hoverItem));
        if (
          isChildrenNode(dragItem, hoverItem) ||
          isChildrenNode(hoverItem, dragItem)
        ) {
          return;
        }
        // FIX ME...  稍后会做深克隆的时间旅行操作，暂时先不考虑
        const dragNodes = findNodeLevelById(cards, dragItem && dragItem.id);
        const hoverNodes = findNodeLevelById(cards, hoverItem.id);
        // console.log(dragItem, hoverItem);
        if (!hoverNodes || !dragNodes) {
          // console.log(dragItem, hoverNodes, hoverItem, cloneDeep(cards));
          setCards(cards);
          return;
        }

        // 首先找到各自的id在当前nodes中的序号
        const deleteNode = dragNodes.find(item => item.id === dragItem.id);

        const deleteIndex = dragNodes.findIndex(
          item => item.id === dragItem.id
        );

        const insertIndex = hoverNodes.findIndex(
          item => item.id === hoverItem.id
        );

        if (deleteIndex === -1 || insertIndex === -1) {
          return cards;
        }

        // 删除和插入操作 先克隆一个副本
        const cloneCards = cloneDeep(cards);
        dragNodes.splice(deleteIndex, 1);
        hoverNodes.splice(insertIndex, 0, deleteNode);
        setCards([...cards]);
      },
      [cards]
    );

    const addCard = useCallback(
      (insertIndex, id, card) => {
        const findId = id.replace(/-tail/, '');
        const isTail = id.includes('tail');
        setCards(cards => {
          const currentLevel = findNodeLevelById(cards, findId, isTail);
          /* eslint-disable */
          const newNode = useNode(card, uniqueId('node_'));
          if (insertIndex === 'symbol(tail)') {
            currentLevel.push(newNode);
          } else {
            currentLevel.splice(insertIndex, 0, newNode);
          }
          return cloneDeep(cards);
        });
      },
      [setCards]
    );

    const renderCard = (card, index) => {
      switch (card.$$typeof) {
        case BasicItem:
          return (
            <Card
              key={card.id}
              index={index}
              id={card.id}
              card={card}
              text={card.text}
              moveCard={moveCard}
              addCard={addCard}
              isDraggingNode={isDraggingNode}
              setIsDraggingNode={setIsDraggingNode}
            />
          );
        case LoopItem:
          // 循环结构
          return (
            <LoopCard
              key={card.id}
              id={card.id}
              index={index}
              card={card}
              moveCard={moveCard}
              addCard={addCard}
              isDraggingNode={isDraggingNode}
              setIsDraggingNode={setIsDraggingNode}
            />
          );
      }
    };
    return (
      <div className="dragger-editor-container">
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </div>
    );
  }
};
export default Container;
