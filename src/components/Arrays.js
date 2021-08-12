import React, {useState} from 'react';
import { Input, Form, Button } from 'antd';
import { PropertySafetyFilled } from '@ant-design/icons';

function Arrays() {
    const [info, setInfo] = useState({
        name: '',
        email: ''
    });

    const handleOnChange = (e) => {
        setInfo({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                name="name"
                onChange={handleOnChange} 
                value={info.value} 
                placeholder="이름"
            />
            <Input 
                name="email"
                onChange={handleOnChange} 
                value={info.email} 
                placeholder="이메일"
            />
            <Button type="submit">작성</Button>
        </Form>
    );
} 

export default Arrays;