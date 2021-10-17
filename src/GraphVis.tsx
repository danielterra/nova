import React from 'react';
import Graph from 'react-graph-vis';

export interface GraphVisNode {
    id: string;
    label: string;
    title?: string;
    shape?: string;
}

export interface GraphVisEdge {
    from: string;
    to: string;
    label?: string;
    title?: string;
}

interface GraphVisProps {
    nodes?: GraphVisNode[];
    edges?: GraphVisEdge[];
    options?: any;
}

export const GraphVis = (props: GraphVisProps) => {
    let { nodes, edges } = props;
    console.log(nodes, edges);

    const options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: "#FFFFFF"
        },
        autoResize: true
    };

    const events = {
        select: function (event: any) {
            const { nodes, edges } = event;
            console.log(nodes, edges);
        }
    };

    console.log({ nodes, edges });

    return (
        <Graph
            graph={{nodes, edges}}
            options={options}
            events={events}
        />
    )
}