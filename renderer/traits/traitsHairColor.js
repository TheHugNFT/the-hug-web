const { getColorImpl } = require('./getColor')
const hairPalettes = {
  brown: [
    '#59260B',
    '#310306',
    '#5d3321', //ginger (brown)
    // "#D08736",
  ],
  black: [
    '#121212',
    '#121212', //add more black
    '#121212', //add more black
  ],
  dark_blonde: [
    // "#FCFCFE",
    '#5E321F',
    '#5e4e1f',
    '#996515',
  ],
  red: [
    '#6C0000',
    '#76412A', //ginger (brown)
    '#8C2600',
    // "#B10107",
    // "#FD24A9",
    '#FB4901',
    // "#7C0A02", //red brown
    '#97502D',
    // "#171313",
  ],
  blondes_have_more_fun: [
    '#E6BE8A', //shining gold hair
    '#FFCC47',
  ],
  gray: [
    '#6c6c6c',
    '#dadada',
    '#999999',
    '#444444',
    '#FCFCFE',
    // '#ffffff',
    '#252325',
    // "#8A635C",
  ],
  hair_dye_purpleish: [
    '#401215', //hair dye
    '#970572',
    '#3D0463',
    '#FA01B3',
    '#c4c4fc',
  ],
  hair_dye_blueish: ['#071650', '#3e5fa4'],
  hair_dye_greenish: ['#3c482a', '#A6B68E'],
  alien_hair: [
    '#0058ff',
    '#47af1f', // never reached
    '#00ffa4', // never reached
  ],
}

const hairPaletteIndex = [
  'brown',
  'black',
  'dark_blonde',
  'red',
  'blondes_have_more_fun',
  'gray',
  'hair_dye_purpleish',
  'hair_dye_blueish',
  'hair_dye_greenish',
  'alien_hair',
]

const rarityScale = [
  13,
  24,
  32,
  40,
  44,
  48,
  52,
  56, // 59, 61, 63,
]

function getColorHair(byte1, word2) {
  return getColorImpl(
    hairPaletteIndex,
    hairPalettes,
    byte1,
    word2,
    rarityScale
  )
}

module.exports = {
  hairPalettes,
  hairPaletteIndex,
  getColorHair,
}
