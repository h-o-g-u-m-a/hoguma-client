import React from 'react';
import { useDispatch } from 'react-redux';
import { characterOpen, characterSelected } from '../../actions';
import Cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import coseBilkent from 'cytoscape-cose-bilkent';

const data = [
  // node
  { data: { id: '1', label: '나문희' } },
  { data: { id: '2', label: '이순재' } },
  { data: { id: '3', label: '박해미' } },
  { data: { id: '4', label: '이준하' } },
  { data: { id: '5', label: '이민호' } },
  { data: { id: '6', label: '이윤호' } },
  { data: { id: '7', label: '이민용' } },
  { data: { id: '8', label: '신지' } },
  { data: { id: '9', label: '서민정' } },
  { data: { id: '10', label: '강유미' } },
  { data: { id: '11', label: '김범' } },
  { data: { id: '12', label: '홍순창' } },
  { data: { id: '13', label: '개성댁' } },
  { data: { id: '14', label: '황찬성' } },

  // edge
  { data: { id: '102', target: '1', source: '2', type: 'family' } },
  { data: { id: '304', target: '3', source: '4', type: 'family' } },
  { data: { id: '204', target: '2', source: '4', type: 'family' } },
  { data: { id: '104', target: '1', source: '4', type: 'family' } },
  { data: { id: '305', target: '3', source: '5', type: 'family' } },
  { data: { id: '306', target: '3', source: '6', type: 'family' } },
  { data: { id: '405', target: '4', source: '5', type: 'family' } },
  { data: { id: '406', target: '4', source: '6', type: 'family' } },
  { data: { id: '107', target: '1', source: '7', type: 'family' } },
  { data: { id: '207', target: '2', source: '7', type: 'family' } },
  { data: { id: '609', target: '6', source: '9', type: 'school' } },
  { data: { id: '709', target: '7', source: '9', type: 'school' } },
  { data: { id: '7012', target: '7', source: '12', type: 'school' } },
  { data: { id: '5010', target: '5', source: '10', type: 'school' } },
  { data: { id: '5011', target: '5', source: '11', type: 'school' } },
  { data: { id: '9012', target: '9', source: '12', type: 'school' } },
  { data: { id: '1013', target: '1', source: '13', type: 'friend' } },
  { data: { id: '809', target: '8', source: '9', type: 'friend' } },
  { data: { id: '6014', target: '6', source: '14', type: 'school' } },
];

Cytoscape.use(coseBilkent);

export default function MapOrigin() {
  const dispatch = useDispatch();

  const familyColor = '#f6b93b';
  const schoolColor = '#82ccdd';
  const friendColor = '#badc58';

  const style = [
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        label: 'data(label)',
        width: 50,
        height: 50,
        'font-size': 10,
      },
    },

    {
      selector: 'edge',
      style: {
        width: '1.5px',
        'curve-style': 'bezier',
        'line-color': '#ced6e0',
        'target-arrow-color': '#ced6e0',
        'target-arrow-shape': 'vee',
        'source-arrow-color': '#ced6e0',
        'source-arrow-shape': 'vee',
        'arrow-scale': 1,
      },
    },
    {
      selector: 'node:selected',
      style: {
        'border-width': '6px',
        'border-color': '#AAD8FF',
        'border-opacity': '0.5',
        'background-color': '#77828C',
        width: 50,
        height: 50,
      },
    },
    {
      selector: "edge[type='family']",
      style: {
        'line-color': familyColor,
        'target-arrow-color': familyColor,
        'source-arrow-color': familyColor,
      },
    },
    {
      selector: "edge[type='school']",
      style: {
        'line-color': schoolColor,
        'target-arrow-color': schoolColor,
        'source-arrow-color': schoolColor,
      },
    },
    {
      selector: "edge[type='friend']",
      style: {
        'line-color': friendColor,
        'target-arrow-color': friendColor,
        'source-arrow-color': friendColor,
      },
    },
  ];

  for (let i = 1; i < 15; i++) {
    style.push({
      selector: `#${i}`,
      style: {
        'background-image': `images/map/${i}.jpg`,
        'background-fit': 'cover',
      },
    });
  }

  const layout = {
    name: 'cose-bilkent',
    animate: false,
    gravityRangeCompound: 1.5,
    fit: true,
    tile: true,
  };

  return (
    <>
      <CytoscapeComponent
        elements={data}
        style={{ width: '100%', height: '100%' }}
        stylesheet={style}
        layout={layout}
        zoomingEnabled={true}
        boxSelectionEnabled={true}
        maxZoom={5}
        minZoom={1}
        cy={(cy) => {
          console.log('EVT', cy);

          cy.on('tap', 'node', (evt) => {
            const node = evt.target;

            dispatch(characterSelected(node.data().id));
            dispatch(characterOpen());
          });
        }}
      />
    </>
  );
}
