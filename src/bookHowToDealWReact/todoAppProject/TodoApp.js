import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import './TodoTemplate.scss';

function createBulkTodos() {
    const array = [];

    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일${i}`,
            checked: false,
        })
    }
    return array;
}

const TodoApp = () => {
    const [todos, setTodos] = useState(createBulkTodos);

    // 고윳값으로 사용될 id
    // ref를 사용하여 변수에 담기
    const nextId = useRef(2501);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos => todos.concat(todo));
            nextId.current += 1; // nextId 1씩 더하기
        },
        [todos]
    );

    const onRemove = useCallback(
        id => {
            setTodos(todos => todos.filter(todo => todo.id !== id));
        },
        [todos],
    );

    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo)
            )
        },
        [],
    );

    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </TodoTemplate>
        </div>
    );
};

export default TodoApp;