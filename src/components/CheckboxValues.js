import React, { useState } from 'react'
import { Checkbox } from 'antd';

const CheckboxValues = () => {
    const [values, setValues] = useState({
        mistery: []
    })

    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: false },
    ];

    const onChange = (e) => console.log(e)


    const onChangeTest = (e) => {
        console.log(e)
        setValues({
            ...values,
            mistery: e
        })
    }

    console.log(values)

    return (
        <div style={{ textAlign: 'center', paddingTop: 50 }}>
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} /> <br /> <br />
            <Checkbox.Group options={options} defaultValue={['Orange']} onChange={onChange} />
            <br /> <br />
            <Checkbox.Group
                options={optionsWithDisabled}
                disabled
                defaultValue={['Apple']}
                onChange={onChange}
            />
            <br /> <br /> <hr />
            <Checkbox.Group
                onChange={onChangeTest}
            >
                <Checkbox
                    value="fri"
                >
                    금
                </Checkbox>
                <Checkbox
                    value="sat"
                >
                    토
                </Checkbox>
                <Checkbox
                    value="sun"
                >
                    일
                </Checkbox>
            </Checkbox.Group>
        </div>
    )
}

export default CheckboxValues
