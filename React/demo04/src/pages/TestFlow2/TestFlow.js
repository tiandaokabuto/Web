import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Provider } from "react-redux";

import DragContainer from "./layout/DragContainer";
import DragItem from "./layout/DragItem";
import DragParamPanel from "./layout/DragParamPanel";

import configureStore from "./redux";

import "./index.less";

export default () => {
	return (
		<DndProvider backend={Backend}>
			<Provider store={configureStore()}>
				<div className="dragger-editor">
					<DragItem />
					<DragContainer />
					<DragParamPanel />
				</div>
			</Provider>
		</DndProvider>
	);
};
