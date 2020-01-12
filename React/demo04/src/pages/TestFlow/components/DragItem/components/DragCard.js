import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import ItemTypes from "../../../ItemTypes";

export default ({ item }) => {
	const ref = useRef(null);
	const [, drag] = useDrag({
		item: { type: ItemTypes.CARD, effectTag: "new", text: item.text, cardType: item.cardType, children: item.children },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	});
	drag(ref);
	return <div ref={ref}>{item.text}</div>;
};
