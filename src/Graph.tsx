import React from "react";
import styled from "styled-components";

// https://github.com/uber/react-digraph
import {
    GraphView,
    IGraphViewProps
} from 'react-digraph';

import {
    actionColor, 
    actionColor2,
    secondaryColor, 
    secondaryColor2} from './BaseStyles';

const GraphContainer = styled.div`
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

export const Graph = (props:IGraphViewProps) => {
    return (
        <GraphContainer>
            <GraphView 
                {...props}/>
        </GraphContainer>
    )
}