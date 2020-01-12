import React, { useState } from "react";

import DragCard from "./components/DragCard";

const initialState = [
	{
		text: "语句块1",
		cardType: "NORMAL"
	},
	{
		text: "语句块2",
		cardType: 'NORMAL'
	},
	{
		text: "循环",
		cardType: 'CYCLE',
		children: [
			// {
			// 	text: '循环内语句1',
			// 	cardType: 'NORMAL'
			// }
		]
	}
];

export default () => {
	const [dragCard, setDragCard] = useState(initialState);
	return (
		<div className="dragger-editor-item">
			{dragCard.map((item, index) => (
				<DragCard key={index} item={item} />
			))}
		</div>
	);
};
