import React from 'react';
import Graph from './Graph.js';

it('renders grid with 25 elements and 6 columns', () => {
    let graph = new Graph(25, 6);

    expect(graph.nodes.length).toBe(5);
    expect(graph.nodes[4].length).toBe(1);
});

it('renders grid with 5 elements and 1 column', () => {
    let graph = new Graph(5, 5);

    expect(graph.nodes.length).toBe(1);
    expect(graph.nodes[0].length).toBe(5);
});

it('renders grid with 10 elements and 2 columns', () => {
    let graph = new Graph(10, 2);

    expect(graph.nodes.length).toBe(5);
    expect(graph.nodes[0].length).toBe(2);
});
