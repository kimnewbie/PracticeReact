import React, { useMemo, useState } from 'react';

/**
 * 
 * useMemo를 이용하여 
 * 값이 바꼈을 때만 연산했던 결과를 다시 사용하기
 * 
 */
const AverageUseMemo = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const getAverage = numbers => {
        console.log('평균값 계산 중..');
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((a, b) => a + b);
        return sum / numbers.length;
    }

    const onChange = e => {
        setNumber(e.target.value);
    }
    const onInsert = () => {
        const nextLine = list.concat(parseInt(number));
        setList(nextLine);
        setNumber('');
    }

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b>{avg}
            </div>
        </div>
    );
};

export default AverageUseMemo;