import React, { useRef, useState, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import useDebounce from "react-hook-easier/lib/useDebounce";

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
const Card = ({ id, text, index, moveCard, addCard }) => {
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
	const [{ isOver, isOverCurrent }, drop] = useDrop({
		accept: ItemTypes.CARD,
		hover(item, monitor) { // 在组件上悬浮时调用
			// console.log('hover', item) // item是悬浮在上方的组件
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

			const hoverMiddleThree = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 3

			const hoverIndex = index;

			if (item.effectTag === "new") {
				if (hoverClientY < hoverMiddleY) {
					setClassName("cursor__before");
					resetClassName();
					// console.log('在上面')
				} else {
					setClassName("cursor__after");
					resetClassName();
					// console.log('在下面')
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
			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
		drop(item, monitor) {
			console.log(item)
			if (!ref.current) {
				return;
			}
			if (item.effectTag === "new") {
				addCard(
					className === "cursor__before" ? index : index + 1,
					item.text,
					item.cardType
				);
			}
			// const hoverBoundingRect = ref.current.getBoundingClientRect();
			// const hoverMiddleThree = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 3

			// const clientOffset = monitor.getClientOffset();
			// const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			
			// if (hoverClientY < hoverMiddleThree || hoverClientY > hoverMiddleThree * 2) {
				
			// } else {
			// 	console.log('在中部')
			// }
		}
		// collect: monitor => ({
		// 	isOver: monitor.isOver(),
		// 	isOverCurrent: monitor.isOver({shallow:true})
		// })
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
			{text}
			<div className="card-mask"></div>
		</div>
	);
};
export default Card;
