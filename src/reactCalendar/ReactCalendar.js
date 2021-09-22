import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 8, 0),
        end: new Date(2021, 8, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 8, 7),
        end: new Date(2021, 8, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 8, 20),
        end: new Date(2021, 8, 23),
    },
];

export default function ReactCalendar() {
    const [newEvent, setNewEvent] = useState(
        {
            title: "",
            start: "",
            end: ""
        }
    )
    const [allEvent, setAllEvent] = useState(events)

    const handleAddEvnet = () => setAllEvent([...allEvent, newEvent])


    return (
        <div>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker
                    placeholderText="Start Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start: start })} // start만 사용가능
                />
                <DatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end: end })} // end만 사용가능
                />
                <button
                    style={{ marginTop: "10px" }}
                    onClick={handleAddEvnet}
                >
                    Add Event
                </button>
            </div>
            <Calendar
                localizer={localizer}
                events={allEvent}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
            />
        </div>
    )
}
