import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function InputSorting() {
    const dataSource = [
        { Id: 1, Name: "Resolved" },
        { Id: 2, Name: "Communicated" },
        { Id: 3, Name: "Closed" },
        { Id: 4, Name: "Not Identified" },
        { Id: 5, Name: "Cancelled" },
        { Id: 6, Name: "Identified" }
    ];

    console.log(dataSource)

    const orderListByKey = (data, key, order) => {
        const compareValues = (key, order = "asc") => (elemA, elemB) => {
            if (!elemA.hasOwnProperty(key) || !elemB.hasOwnProperty(key)) return 0;
            const comparison = elemA[key].localeCompare(elemB[key]);
            return order === "desc" ? comparison * -1 : comparison;
        };
        return data.sort(compareValues(key, order));
    }

    return (
        <div style={{ padding: "30px 30px", textAlign: 'center' }}>
            <span>Select without sorting</span>
            <Select
                showSearch
                style={{ width: 200, margin: "10px" }}
                placeholder="Select by Id"
            >
                {
                    dataSource.map(data => (
                        <Option key={data.Id} value={data.Id}>
                            {data.Name}
                        </Option>
                    ))
                }
            </Select>
            <hr />
            <span>Select without sorting</span>
            <Select
                showSearch
                style={{ width: 200, margin: "10px" }}
                placeholder="Select a Incidence State"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
                }
            >
                {
                    orderListByKey(dataSource, "Name").map(incidences => (
                        <Option key={incidences.Id} value={incidences.Id}>
                            {incidences.Name}
                        </Option>
                    ))
                }
            </Select>
        </div>
    )
}