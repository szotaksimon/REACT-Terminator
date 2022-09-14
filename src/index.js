import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Terminator from './components/terminator/terminator.component';
import 'tachyons';
import { models } from './models';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Terminator id={models[0].id} name={models[0].name} serialNumber={models[0].serialNumber}/>
    <Terminator id={models[1].id} name={models[1].name} serialNumber={models[1].serialNumber}/>
    <Terminator id={models[2].id} name={models[2].name} serialNumber={models[2].serialNumber}/>
  </div>
);

// ReactDOM.render(<Hello />, document.getElementById("root"));