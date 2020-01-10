import React, { useState, useCallback } from "react";
import Card from "../Card";
import CycleCard from '../CycleCard'
// import DragLine from '../DragLine/index'
import update from "immutability-helper";
const style = {
	width: 400,
	padding: 10
};
/* eslint-disable */
const Container = ({ cards, setCards }) => {
	{
		const [cards, setCards] = useState([
		{
			id: 1,
			text: "Write a cool JS library",
			cardType: "NORMAL"
		},
		{
			id: 2,
			text: "Make it generic enough",
			cardType: "CYCLE",
			children: [
				{
					id: 111,
					text: '循环内语句块1',
					cardType: 'NORMAL',
				},
			]
		},
		{
			id: 3,
			text: "Write README",
			cardType: "NORMAL"
		},
		{
			id: 4,
			text: "Create some examples",
			cardType: "NORMAL"
		},
		{
			id: 5,
			text:
				"Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
				cardType: "NORMAL"
		},
		{
			id: 6,
			text: "ABCDEFG",
			cardType: "NORMAL"
		},
		{
			id: 7,
			text: "PROFIT",
			cardType: "CYCLE",
			children: [
				{
					id: 111,
					text: '循环内语句块1',
					cardType: 'NORMAL',
				},
			]
		}
		]);
		// 编辑器内移动
		const moveCard = useCallback(
			(dragIndex, hoverIndex) => {
				console.log(dragIndex, hoverIndex)
				const dragCard = cards[dragIndex];
				setCards(
					update(cards, {
						$splice: [
							[dragIndex, 1], // cards.splice(dragIndex, 1)删除本身
							[hoverIndex, 0, dragCard]
						]
					})
				);
			},[cards]
		);
		
		// 添加新流程
		const addCard = useCallback(
			(insertIndex, text, cardType) => {
				console.log('触发add')
				console.log(insertIndex, text, cardType)
				setCards(cards => {
					if (cardType === 'CYCLE') {
						return update(cards, {
							$splice: [
								[insertIndex, 0, { id: cards.length + 1, text, cardType, children: []}]
							]
						});
					} else {
						return update(cards, {
							$splice: [
								[insertIndex, 0, { id: cards.length + 1, text, cardType}]
							]
						});
					}
				});
			},
			[setCards]
		);
		// 循环中添加
		const putInCycle = useCallback(
			(cardIndex, childrenLength, item) => {
				console.log('触发push')
				let arr = update(cards[cardIndex].children, {$push: [item]})
				cards[cardIndex].children = arr
				setCards(cards => {
					return JSON.parse(JSON.stringify(cards))
				})
			},
			[cards]
		)

		const renderCard = (card, index) => {
			if (card.cardType === 'NORMAL') {
				return (
					<Card
						key={card.id}
						index={index}
						id={card.id}
						cardType={card.cardType}
						text={card.text}
						moveCard={moveCard}
						addCard={addCard}
					/>
				);
			} else if (card.cardType === 'CYCLE') {
				return (
					<CycleCard
						key={card.id}
						index={index}
						id={card.id}
						cardType={card.cardType}
						text={card.text}
						children={card.children}
						moveCard={moveCard}
						addCard={addCard}
						putInCycle={putInCycle}
					>
					</CycleCard>
				)
			}
			
		};
		return (
			<div className="dragger-editor-container">
				<div style={style}>
					{cards.map((card, i) => {
						return renderCard(card, i)
					})}
				</div>
			</div>
		);
	}
};
export default Container;
