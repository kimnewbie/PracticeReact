import React, { useRef } from 'react'; // rsc

const ScrollBox = () => {
    const scrollRef = useRef();

    const style = {
        border: '1px solid black',
        height: '300px',
        width: '300px',
        overflow: 'auto',
        position: 'relative'
    };

    const innerStyle = {
        width: '100%',
        height: '650px',
        background: 'linear-gradient(white, black)'
    }

    const scrollToBottom = () => {
        const { scrollHeight, clientHeight } = scrollRef.current;
        scrollRef.current.scrollTop = scrollHeight - clientHeight;
        console.log(scrollHeight, clientHeight)
        console.log(scrollRef.current)
    }
    const scrollToTop = () => {
        scrollRef.current.scrollTop = 0;
    }

    return (
        <div style={{ padding: 100 }}>
            <div
                style={style}
                ref={scrollRef}
            >
                <div style={innerStyle} />
            </div>
            <button onClick={scrollToBottom}>맨밑으로</button>
            <button onClick={scrollToTop}>맨위로</button>
        </div>
    );
};

export default ScrollBox;