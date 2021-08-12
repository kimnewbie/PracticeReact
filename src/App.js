import './App.css';
import 'antd/dist/antd.css';
import {Button, DatePicker} from 'antd';
import moment from 'moment';
import {useState} from 'react';

const {RangePicker} = DatePicker;

function App() {
   const [date, setDate] = useState([
       moment((moment(), 'YYYY-MM-DD'),(moment(), 'YYYY-MM-DD'))
   ]); 

    const onResetClick = () => {
        console.log(moment())
        console.log(moment()._d)
    }
    const onClick = () => {
        setDate( moment((moment(), 'YYYY-MM-DD'),(moment(), 'YYYY-MM-DD')))
    }

    return (
        <div className="App">
            <RangePicker  onChange={onResetClick}/>
            <Button onClick={onClick}>
                reset
            </Button>
        </div>
    );
}
export default App;