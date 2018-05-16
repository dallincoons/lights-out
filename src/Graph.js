import React, { Component } from 'react';

class Graph {
    verticesCount;
    edgesCount;
    nodes;

    constructor(verticesCount, colMax) {
        this.verticesCount = verticesCount;
        this.edgesCount = 0;
        this.nodes  = [];

        const columns = colMax;
        const rows = Math.ceil(verticesCount / columns);

        this.buildGraph(rows, columns, verticesCount);
    }

    buildGraph(rows, columns, verticesCount) {
        for (let i = 0; i < rows; i++) {
            this.nodes[i] = [];
            let currentTotal = i * columns;
            let remaining = verticesCount - currentTotal;
            let totalLeft = columns;
            if (remaining < columns) {
                totalLeft = remaining;
            }
            for (let j = 0; j < totalLeft; j++) {
                this.nodes[i][j] = Math.floor(Math.random() * Math.floor(2));
            }
        }
    }
}

export default Graph;
