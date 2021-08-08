import './App.css';
import 'antd/dist/antd.css';
import ButtonChange from './components/ButtonChange';
import AgGidTest from './components/AgGidTest';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  return (
    <div className="App">
      <ButtonChange />
      <AgGidTest />
    </div>
  );
}

export default App;