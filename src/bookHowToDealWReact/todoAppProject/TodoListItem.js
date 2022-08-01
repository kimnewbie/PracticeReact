import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';


// https://react-icons.github.io/react-icons/icons?name=md
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;

    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoListItem'>
                <div
                    className={cn('checkbox', { checked })}
                    onClick={() => onToggle(id)}
                >
                    {
                        checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
                    }
                    <div className='text'>{text}</div>
                </div>
                <div className='remove' onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);