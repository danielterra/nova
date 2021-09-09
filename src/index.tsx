import React from 'react';
import ReactDOM from 'react-dom';

import { Orion } from "./Orion";
import { DataRecord } from './DataRecord';
import exampleData from './me.json';
import './Nova.css';

ReactDOM.render(
  <React.StrictMode>
    <Orion>
      <DataRecord data={exampleData} />
    </Orion>
  </React.StrictMode>,
  document.getElementById('root')
);