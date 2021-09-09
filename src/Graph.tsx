import React from "react";
import styled from "styled-components";

// https://github.com/uber/react-digraph
import {
    GraphView,
    IGraphViewProps
} from 'react-digraph';

import { 
    TextHeadline1,  
    actionColor, 
    actionColor2,
    secondaryColor, 
    secondaryColor2} from './BaseStyles';

const GraphContainer = styled.div`
    height: 80%;
    padding: 20px;
    flex-grow:1;

    .view-wrapper {
        background: transparent;
        border: 1px solid ${actionColor};
    }

    .view-wrapper .graph-controls>.slider-wrapper {
        color: ${actionColor};
        border: none;
        background: transparent;
    }

    .view-wrapper .graph-controls>.slider-button {
        fill: ${actionColor};
        border: 0;
        background-color: transparent;
    }

    .view-wrapper .graph-controls>.slider-wrapper>.slider {
        -webkit-appearance: none;
        appearance: none;
        display: inline-block;
        width: auto;
        height: 5px;
        border-radius: 5px;
        background-color: ${actionColor2};
        outline: none;
    }

    .view-wrapper .graph-controls>.slider-wrapper>.slider::-webkit-slider-thumb {
        all:unset; /* limpa os estilos iniciais */
        -webkit-appearance: none; /* remove a aparencia padão */
        border: none;
        border-radius: 100%;
        height:15px;
        width: 15px;
        background: ${actionColor};
        position: relative;
        top:3px;
    }

    .view-wrapper .node .shape>use.node {
        stroke: ${actionColor};
        fill: ${actionColor2};
    }

    .view-wrapper .node .shape>use.node.selected {
        stroke: ${secondaryColor};
        fill: ${secondaryColor2};
    }

    .view-wrapper text.node-text {
        fill: ${actionColor}
    }

    .view-wrapper path.edge-path {
        stroke: ${actionColor2}
    }

    .view-wrapper .edge {
        stroke: transparent;
        color: transparent;
    }

    .view-wrapper .arrow {
        fill: ${actionColor2}
    }

    .view-wrapper .edge .edge-text {
        fill: ${actionColor};
        stroke: ${actionColor};
    }
`;

const GraphConfig =  {
    NodeTypes: {
      empty: { // required to show empty nodes
        typeText: "None",
        shapeId: "#empty", // relates to the type property of a node
        shape: (
          <symbol viewBox="0 0 100 100" id="empty" key="0">
            <circle cx="50" cy="50" r="45"></circle>
          </symbol>
        )
      },
      hex: { // required to show empty nodes
        typeText: "Custom",
        shapeId: "#hex", // relates to the type property of a node
        shape: (
          <symbol viewBox="0 0 100 100" id="hex" key="0">
            <polygon points="100,50 75,93 25,93 0,50 25,7 75,7"></polygon>
          </symbol>
        )
      }
    },
    NodeSubtypes: {},
    EdgeTypes: {
      emptyEdge: {  // required to show empty edges
        shapeId: "#emptyEdge",
        shape: (
          <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
            <circle cx="25" cy="25" r="8" fill="currentColor"> </circle>
          </symbol>
        )
      }
    }
}

interface GraphProps {
    label: string;
    graphViewProps:IGraphViewProps;
}

export const Graph = (props:GraphProps) => {
    const {NodeTypes, NodeSubtypes, EdgeTypes} = GraphConfig;
    
    return (
        <GraphContainer>
            <TextHeadline1>{props.label}</TextHeadline1>
            <GraphView 
                {...props.graphViewProps}
                nodeTypes={NodeTypes}
                nodeSubtypes={NodeSubtypes}
                edgeTypes={EdgeTypes}/>
        </GraphContainer>
    )
}