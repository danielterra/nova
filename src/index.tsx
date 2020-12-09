import React from 'react';
import ReactDOM from 'react-dom';

import { Orion } from "./Orion";
import { Graph } from "./Graph";
import { DataRecord } from './DataRecord';
import exampleData from './me.json';
import './Nova.css';
import { IGraphViewProps, IEdge } from 'react-digraph';

const graphViewProps = {
  nodes: [
    {
      "id": 1,
      "title": "Node 1",
      "x": 258.3976135253906,
      "y": 331.9783248901367,
      "type": "hex"
    },
    {
      "id": 2,
      "title": "Node 2",
      "x": 593.9393920898438,
      "y": 260.6060791015625,
      "type": "hex"
    },
    {
      "id": 3,
      "title": "Node 3",
      "x": 237.5757598876953,
      "y": 61.81818389892578,
      "type": "hex"
    },
    {
      "id": 4,
      "title": "Node 4",
      "x": 600.5757598876953,
      "y": 600.81818389892578,
      "type": "hex"
    }
  ],
  edges: [
    {
      "source": 1,
      "target": 2,
      "handleText": "handle text",
      "handleTooltipText": "tooltip",
      "type": "emptyEdge"
    },
    {
      "source": 2,
      "target": 3,
      "type": "emptyEdge"
    },
    {
      "source": 3,
      "target": 4,
      "type": "emptyEdge"
    },
    {
      "source": 4,
      "target": 1,
      "type": "emptyEdge"
    }
  ],
  nodeKey:"id",
  selected: {},
  edgeTypes:[],
  nodeSubtypes:[],
  nodeTypes:[],
  renderBackground: () => null
}

ReactDOM.render(
  <React.StrictMode>
    <Orion>
      <Graph label="GRAPH" graphViewProps={graphViewProps}/>
      <DataRecord data={exampleData} />
    </Orion>
  </React.StrictMode>,
  document.getElementById('root')
);