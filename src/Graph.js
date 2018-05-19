import React, { Component } from 'react';

class Graph {
    verticesCount;
    edgesCount;
    nodes;
    columns;
    rows;

    constructor(verticesCount, colMax) {
        this.verticesCount = verticesCount;
        this.edgesCount = 0;
        this.nodes  = [];
        this.flatNodes = [];
        this.adjacent = [];

        this.columns = colMax;
        this.rows = Math.ceil(verticesCount / this.columns);

        this.buildGraph(this.rows, this.columns, verticesCount);
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

                this.addAdjacencies(i , j)
            }
        }
    }

    addAdjacencies(row, column) {
        if (! this.adjacent[row]) {
            this.adjacent[row] = {};
        }

        let adjacentList = [];

        if(column < this.columns - 1) {
            adjacentList.push({row : row, column: column + 1});
        }

        if(row < this.rows - 1) {
            adjacentList.push({row : row + 1, column: column});
        }

        if(row !== 0) {
            adjacentList.push({row: row - 1, column: column});
        }

        if(column !== 0) {
            adjacentList.push({row: row, column: column - 1});
        }

        this.adjacent[row][column] = adjacentList;

    }

    adjacentNodes(coordinates) {
        return this.adjacent[coordinates.row][coordinates.column];
    }

    listVertices() {
        return this.flatNodes;
    }
}

export default Graph;
