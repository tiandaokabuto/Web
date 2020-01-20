import React, {useReducer} from 'react';
import ShowArea from './showArea'
import Buttons from './Buttons'
import { Color } from './Color'

function Example4() {
    return (
        <div>
            <Color>
                <ShowArea></ShowArea>
                <Buttons></Buttons>
            </Color>
        </div>
    )
}

export default Example4