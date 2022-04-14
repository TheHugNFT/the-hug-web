const palettes = {
  swaggersouls: [
    '#353354',
    '#b38d0d',
    '#706d64',
    '#ffffff',
    '#990000',
  ],
  retroShirt: [
    '#a2c2d7',
    '#ccba9b',
    '#394b56',
    '#728ba3',
    '#ad987b',
  ],
  pastel: [
    '#1b85b8',
    '#5a5255',
    '#559e83',
    '#ae5a41',
    '#c3cb71',
  ],
  NeverUsedMarijuanaButWearsABobMarleyShirt: [
    '#cb1a1a',
    '#533131',
    '#e9e006',
    '#385037',
    '#089f3a',
  ],
  academia: [
    '#4d6e57',
    '#40477b',
    '#98a2d0',
    '#ffffff',
    '#c84343',
  ],
  pinkCombo: [
    '#dd3a6c',
    '#82d4e1',
    '#3d2665',
    '#afb867',
    '#000000',
  ],
  thriftShop: [
    // '#ff6839', // 6
    '#ffc713', // 4
    '#1b85b8',
    '#749d39', // 3
    '#6b83bb', // 2
    '#8b6da6', // 1
  ],
  shadowFlame: [
    '#33201b',
    '#282214',
    '#565b5d',
    '#752c0c',
    '#ad321a',
  ],
  skittles: [
    '#048207',
    '#441349',
    '#000ae5',
    '#f1be02',
    '#e64808',
  ],
  poodleSkirts: [
    '#000000',
    '#ff7997',
    '#ffffff',
    '#c3eaf1',
    '#ffd6e6',
  ],

  blueJeansAndDeadDreams: [
    '#20375e',
    '#293f65',
    '#344a6f',
    '#40567a',
    '#4b5f81',
  ],
  dadPants: [
    '#908e60',
    '#4b4a3c',
    '#c1bd98',
    '#3b3c39',
    '#dee3b1',
  ],
  black: [
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
  ],
  white: [
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#fffff0',
  ],
}

const allPalettes = {
  Woman: {
    top: [
      'academia',
      'pinkCombo',
      'thriftShop',
      'shadowFlame',
      'skittles',
    ],
    bot: [
      'poodleSkirts',
      'shadowFlame',
      'blueJeansAndDeadDreams',
      'white',
      'black',
    ],
  },
  Man: {
    top: [
      'retroShirt',
      'swaggersouls',
      'pastel',
      'NeverUsedMarijuanaButWearsABobMarleyShirt',
      'black',
    ],
    bot: [
      'blueJeansAndDeadDreams',
      'dadPants',
      'blueJeansAndDeadDreams',
      'black',
      'black',
    ],
  },
}

module.exports = { palettes, allPalettes }
