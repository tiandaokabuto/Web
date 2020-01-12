import React, { useRef, useState, useCallback } from "react";
import { useDrag, useDrop,DragSource } from "react-dnd";
import useDebounce from "react-hook-easier/lib/useDebounce";
import Card from './Card'
// import DragContainer from './DragContainer/index'

import ItemTypes from "../ItemTypes";
const style = {
	// border: '1px dashed gray',
	borderTop: "4px solid transparent",
	borderBottom: "4px solid transparent",
	padding: "0.5rem 1rem",
	// marginBottom: '.5rem',
	backgroundColor: "white",
	backgroundClip: "padding-box",
	cursor: "move",
	position: "relative"
};
const CycleCard = ({ id, text, index, moveCard, addCard, children, putInCycle }) => {
	/**
	 * 可插入状态类
	 */
	const [className, setClassName] = useState("");

	const resetClassName = useCallback(
		useDebounce(() => { // 防抖 
			setClassName("");
		}, 100),
		[setClassName]
	);
	
	const ref = useRef(null);
	const [, drop] = useDrop({
		accept: ItemTypes.CARD,
		hover(item, monitor) { // 在组件上悬浮时调用
			if (!ref.current) {
				return;
			}
			const hoverBoundingRect = ref.current.getBoundingClientRect();
			const hoverMiddleThree = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 3
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;

			const hoverIndex = index;

			if (item.effectTag === "new") {
				if (hoverClientY < hoverMiddleThree) {
					setClassName("cursor__before");
					resetClassName();
				} else if (hoverClientY < hoverMiddleThree * 2 && hoverClientY > hoverMiddleThree) {
				} else {
					setClassName("cursor__after");
					resetClassName();
				}
				return;
			}

			const dragIndex = item.index;

			if (dragIndex === hoverIndex) {
				return;
			}
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleThree) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleThree) {
				return;
			}
			moveCard(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
		drop(item, monitor) {
			if (!ref.current) {
				return;
			}

			const hoverBoundingRect = ref.current.getBoundingClientRect();
			const hoverMiddleThree = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 3

			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			
			if (hoverClientY < hoverMiddleThree || hoverClientY > hoverMiddleThree * 2) {
				if (item.effectTag === "new") {
					addCard(
						className === "cursor__before" ? index : index + 1,
						item.text,
						item.cardType
					);
				}
			} else {
				console.log(item)
				putInCycle(index,children.length,item)
			}
		},
		collect: (monitor, props) => {
			
		}
	});
	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemTypes.CARD, id, index },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	});
	const opacity = isDragging ? 0 : 1;
	drag(drop(ref));

	return (
		<div
			ref={ref}
			style={{ ...style, opacity: opacity }}
			className={className}
		>
			<div>{text}</div>
			{
				children.map((card, index) => {
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
					} else {
						return <CycleCard
									key={card.id}
									index={index}
									id={card.id}
									cardType={card.cardType}
									text={card.text}
									children={card.children}
									moveCard={moveCard}
									addCard={addCard}
									putInCycle={putInCycle}
								/>
					}
				})
			}
			<div className="card-mask"></div>
		</div>
	);
};
export default CycleCard;
