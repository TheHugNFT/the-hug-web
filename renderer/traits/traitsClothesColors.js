const { getColorImpl } = require('./getColor')
const palettes = {
  swaggersouls: [
    '#353354',
    '#b38d0d',
    '#706d64',
    '#ffffff',
    '#990000',
  ],
  retro_shirt: [
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
  pink_combo: [
    '#dd3a6c',
    '#82d4e1',
    '#3d2665',
    '#afb867',
    '#000000',
  ],
  thrift_shop: [
    // '#ff6839', // 6
    '#ffc713', // 4
    '#1b85b8',
    '#749d39', // 3
    '#6b83bb', // 2
    '#8b6da6', // 1
  ],
  shadow_flame: [
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
  poodle_skirts: [
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
  dad_pants: [
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
  black_white: ['#000000', '#ffffff'],
}

const allPalettes = {
  Woman: {
    top: [
      'academia',
      'pink_combo',
      'thrift_shop',
      'shadow_flame',
      'skittles',
      'swaggersouls',
      'black_white',
      'skittles',
      // 'retro_shirt',
    ],
    bot: [
      'poodle_skirts',
      'shadow_flame',
      'blueJeansAndDeadDreams',
      'skittles',
      'dad_pants',
      'swaggersouls',
      'black_white',
    ],
  },
  Man: {
    top: [
      'retro_shirt',
      'pastel',
      'swaggersouls',
      'NeverUsedMarijuanaButWearsABobMarleyShirt',
      'academia',
      'shadow_flame',
      'black_white',
    ],
    bot: [
      'blueJeansAndDeadDreams',
      'dad_pants',
      'swaggersouls',
      'black_white',
      'academia',
      'shadow_flame',
      'black_white',
    ],
  },
}

let rarityScale = [15, 30, 42, 51, 57, 61]

function getClothesColors(gender, piece, word1, word2) {
  let rarityScale1 = [4, 8, 11, 14]
  // let rarityScale2 = [1, 4, 12, 15]
  let rarityScale2 = [6, 10, 13, 15]
  console.log(
    '-------- getColor',
    gender,
    piece,
    word1,
    word2
  )
  let paletteIndex = allPalettes[gender][piece]
  return getColorImpl(
    paletteIndex,
    palettes,
    word1,
    word2,
    rarityScale
    // rarityScale2
  )
}

module.exports = { palettes, allPalettes, getClothesColors }
