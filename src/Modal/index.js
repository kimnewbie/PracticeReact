import React, { useRef, useState } from "react";
import { Button } from "components";
import { Modal as AntModal } from "antd";
import styled from "styled-components"; 
import Draggable from 'react-draggable'; 

const ModalStyled = styled(AntModal)`
  span {
    font-size: 14px;
  }
  .ant-modal-header {
    border-top: 7px solid #ff7b00;
  }
  .ant-modal-title {
    font-weight: bold;
  }
  span.anticon.anticon-close.ant-modal-close-icon {
    vertical-align: -webkit-baseline-middle;
  }
  .ant-modal-footer { 
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
  .ant-input:hover {
    border-color: #ff7b00; 
  }
  input.ant-input:focus, ant-input-focused {
    border-color: #ff7b00 !important;
  }  
  textarea.ant-input:focus, ant-input-focused {
    border-color: #ff7b00 !important; 
  }
`;

const Modal = ({
  visible = false,
  title = "",
  onOk = () => { },
  onCancel = () => { },
  children,
  width = 1400,
  okText: customTitle,
  draggType,
  ...args
}) => { 
  const draggleRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  }); 

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();

    if (!draggType) {
      setDisabled(true);
    }
    if (!targetRect) {
      return;
    }

    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <ModalStyled
      width={width}
      visible={visible}
      title={<div
        style={{
          width: '100%',
          cursor: 'move',
        }}
        onMouseOver={() => {
          if (disabled) {
            setDisabled(false);
          }
        }}
        onMouseOut={() => {
          setDisabled(true);
        }}
        onFocus={() => { }}
        onBlur={() => { }} // end
      >
        {title}
      </div>}
      onOk={onOk}
      onCancel={onCancel}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
      footer={[
        <Button key="submit" type="primary" onClick={onOk}>
          등록
        </Button>,
        <Button key="back" onClick={onCancel} className='cancel__button'>
          취소
        </Button>,
      ]}
      {...args}
    >
      {children}
    </ModalStyled>
  );
};

export default Modal;