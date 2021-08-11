import './App.css';
import 'antd/dist/antd.css';
import ButtonChange from './components/ButtonChange';
import AgGidTest from './components/AgGidTest'; 
import styled from 'styled-components';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Axios from './components/Axios';

function App() { 

    return (
        <div className="App"> 
            <Axios />
        </div>
    );
}

export default App;