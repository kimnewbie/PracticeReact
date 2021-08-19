import React, {Component} from 'react';
import styled, {createGlobalStyle, keyframes, css} from 'styled-components'

const Container = styled.div `
    height: 100vh;
    width: 100%;
    background-color: pink;
`

// .button:active, .button:focus
const Button = styled.button `
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    $:active, 
    $:focus{
        outline: none;
    }
    background-color: ${props => (
    props.danger
        ? "#e74c3c"
        : "#2ecc71"
)}
    ${ (props) => {
    if (props.danger) { // 함수의 return으로 css를 전달하고 css 메소드를 사용합니다!
        return css ` 
                animation: ${rotation} 2s linear infinite; 
                `;}
    }}
`

        const Anchor = styled(Button)`
    text-decoration: none;
`

        const GlobalStyle = createGlobalStyle `
        body{
            padding: 0;
            margin: 0;
        }
`

        const rotation = keyframes `
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
`

        // const Input = styled.input``
        // CSS block인 awesomeCard를 적용
        const Input = styled.input.attrs({required: true})`
            border: none; 
            border-radius: 5px; 
` 

        function StyledComponent() {
            return (
                <Container>
                    <GlobalStyle/>
                    <Button>Hello</Button>
                    <Button danger="danger" rotationTime={5}>Hello</Button>
                    <Anchor as='a' href="http://google.com">Go to google</Anchor>
                    <Input placeholder="Hello"/>
                </Container>
            );
        }
        export default StyledComponent;