import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ScrollBox from './fromBook/ScrollBox';
import McSideMenu from './mcdonalds/McSideMenu';

function App() {
  return (
    <div className='appContainer'>
      <McSideMenu />
    </div>
  );

};

export default App;