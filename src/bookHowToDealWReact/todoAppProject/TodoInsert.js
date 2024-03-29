import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// https://react-icons.github.io/react-icons/icons?name=md
const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value값 초기화

            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                onChange={onChange}
                value={value}
            />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;