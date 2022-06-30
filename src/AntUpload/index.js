import React from 'react';
import { Upload as AntUpload } from 'antd';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const { Dragger } = AntUpload;

const DraggerWrap = styled(Dragger)`
    padding: 30px 0px;
    font-size: 14px;
    letter-spacing: -1px;
    color: #b3b3b3;
    background:#fff !important;
    .ant-upload {
        background: #fff;
    }
    .ant-upload.ant-upload-btn {
        padding:0;
    }
    .underline {
        text-decoration: underline;
        font-weight: bold;
    }
    .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
        border-color: #ff7b00 !important;
    }
`

const Upload = (props) => {
    return (
        <div className='drag-box' style={{ border:'1px solid #bbb', padding: '11px'}}>
            <DraggerWrap {...props}>
                <p> 
                    <FormattedMessage id="T1197" />
                </p>
                <p>
                    <span className='underline'><FormattedMessage id="T1198" /></span><FormattedMessage id="T1199" />
                </p>    
            </DraggerWrap>
        </div>
    )
}

export default Upload;