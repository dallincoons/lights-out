import React, { Component } from 'react';

class Graph {
    verticesCount;
    edgesCount;
    nodes;

    constructor(verticesCount, colMax) {
        this.verticesCount = verticesCount;
        this.edgesCount = 0;
        this.nodes  = [];
        this.flatNodes = [];

        const columns = colMax;
        const rows = Math.ceil(verticesCount / columns);

        this.buildGraph(rows, columns, verticesCount);
    }

    buildGraph(rows, columns, totalVertices) {
        for (let i = 0; i < rows; i++) {
            this.nodes[i] = [];
            let placedVerticesTotal = i * columns;
            let remainingVertices = totalVertices - placedVerticesTotal;
            let totalLeft = columns;

            if (remainingVertices < columns) {
                totalLeft = remainingVertices;
            }
            for (let j = 0; j < totalLeft; j++) {
                this.nodes[i][j] = {'coordinates' : {row: i, column:j}, 'isOn' : Math.random() >= 0.5};
                this.flatNodes.push(this.nodes[i][j]);
            }
        }
    }

    listVertices() {
        return this.flatNodes;
    }
}

export default Graph;
