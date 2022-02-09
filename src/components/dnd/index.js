import './index.scss';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React from 'react';


/* 
    <Dnd dragItems={dragItems} changeItemCallback={t => changeItemCallback(t)} render={renderItem} />
    props:
        dragItems:Array<Objecyt>    要 render 的 data
        changeItemCallback:Function 拖曳後結果傳入回調函數
        render:Function             return JSX Function Parameters 包含dragItem
*/
export default React.memo(function Dnd(props) {

    /* a little function to help us with reordering the result */
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const getItemStyle = (isDragging, draggableStyle) => ({
        // background: isDragging ? "lightgreen" : "#ffffff",
        background: "#ffffff",
        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = isDraggingOver => ({
        // background: isDraggingOver ? "lightbule" : "lightgrey",
        width: "100%"
    });

    const onDragEnd = result => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            props?.dragItems,
            result.source.index,
            result.destination.index
        );

        props.changeItemCallback(items);
    }

    return (
        <div className="dnd">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {props?.dragItems.map((item, index) => (
                                <Draggable key={`k-${index}`} draggableId={`d-${index}`} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            className='dnd-drag-item'
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            <div className='dnd-drag-handle' {...provided.dragHandleProps} />
                                            {/* 自定義 Render 內容 */}
                                            {props.render(item, index)}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
})