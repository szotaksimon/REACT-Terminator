import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import { models } from './models';

import TerminatorList from "./components/terminator-list/terminator-list.component";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TerminatorList models={models} />

);

// ReactDOM.render(<Hello />, document.getElementById("root"));