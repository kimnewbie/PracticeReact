import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button`
  transition: 0.5s;
  font-size: 12px;
  cursor: pointer;
  ${props=> props.type !== 'text' && `
      width: ${props.width}px;
      height: ${props.height}px;
    `
  }
  ${ props => props.type === 'default' && `
    background: #fff;
    border: 1px solid #ff7a00;
    color: #ff7a00de;
    &[disabled] {
      border-color: #d0d1d6;
      color: #d0d1d6;
      pointer-events: none; 
    }
    &:hover {
      border: 1px solid #FF7A00;
      color: #FF7A00;
      background: #FFF3E8;
    }
    &:active {
      background: #FF6600;
      color: #fff;
    }
  `}
  ${props => props.type === 'primary' && `
    background: #FF7B00;
    border: none;
    color:#FFF;
    &:hover {
      background: #FF6600;
    }
    &:active {
      background: #FF7700;
    }
  `}
  ${ props => props.type === 'text' && `
    background: none;
    border: none;
    color: #acacac;
    padding: 0;
  `} 
  ${ props => props.type === 'white' && `
    background: #fff;
    border: 1px solid #d0d1d6;
    &:hover {
      border-color: #ff7a00;
      color: #ff7a00;
    }
  `}
  ${ props => props.type === 'popover' && `
    background: #FE9823;
    border: none;
    color: #FFF; 
  `}
  ${ props => props.type === 'disabled' && `
    cursor: no-drop;
    background: #FFF;
    border: 1px solid #e6e6e6;
    color: #e6e6e6;
  `}
`

const Button = ({ style={}, children, type='default', onClick=()=>{}, width=100, height=32, innerRef, disabled=false, ...args }) => {
  const onClickButton = (e) => {
    if(disabled) {
      e.preventDefault();
    } else {
      onClick(e);
    }
  }
  return (
    <ButtonWrap width={width} height={height} style={{...style}} onClick={onClickButton} type={type} disabled={disabled} {...args} ref={innerRef}>
      {children}
    </ButtonWrap>
  );
};
 
export default Button;