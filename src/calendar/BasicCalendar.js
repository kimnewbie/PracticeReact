import React, { useState } from 'react'
import moment from 'moment'
import './BasicStyled.css';

export default function BasicCalendar() {
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment; // today === moment() 
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week(); // 1년은 52+몇일이라서 53인데, moment는 마지막 주를 1로 표시하기 때문에, 1이나온다면 53으로 표현
    const prevMonth = () => {
        setMoment(getMoment.clone().subtract(1, 'month'));
    }
    const nextMonth = () => {
        setMoment(getMoment.clone().add(1, 'month'));
    }

    const calendarArr = () => {
        let result = [];
        let week = firstWeek;
        for (week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

                            if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) { // 오늘이면 빨간색으로 표시
                                return (
                                    <td
                                        key={index}
                                        style={{ backgroundColor: 'red' }}
                                    >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            } else if (moment().format('MM') === days.format('MM')) {
                                return (
                                    <td
                                        key={index}
                                        style={{ backgroundColor: 'gray' }}
                                    >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            } else {
                                return (
                                    <td key={index}>
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }

                        })
                    }
                </tr>
            );
        }
        return result;
    }

    return (
        <div className="basic">
            <div className="control">
                <button
                    onClick={prevMonth}
                >
                    이전달
                </button>
                <span>{today.format('YYYY년MM월')}</span>
                <button
                    onClick={nextMonth}
                >
                    다음달
                </button>
            </div>
            <table>
                <tbody>
                    {calendarArr()}
                </tbody>
            </table>
        </div>
    )
}
