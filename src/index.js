import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Terminator from './components/terminator/terminator.component';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Terminator />
    <Terminator />
    <Terminator />

  </div>
);

// ReactDOM.render(<Hello />, document.getElementById("root"));