const { getColorImpl } = require('./getColor')
const skinPalettes = {
  mixed_light: [
    '#CC9C80', //peach
    '#E5AF90',
    '#FFC3A0',
  ],
  mixed: ['#C68C73', '#9c7248', '#7c501a'],
  light_1: ['#FFC9A9', '#FFD9C2', '#FFE6DE'],
  light_2: [
    '#FCCABF',
    '#FEB6B7', //pink
    '#EAD4D9',
    // "#D88FAC",
  ],
  reddish: [
    // "#EBCCAB", //tan
    '#C37C4D',
    '#B66B3E',
    '#8E4B32',
  ],
  yellowish: [
    '#D2996C',
    '#f1c27d',
    '#ffe76c',
    // "#FE8EAE", //reddish
    // "#904902",
    // "#B44701",
    // "#ffdbac",
  ],
  // skinMinecraft: ["#e0ac69", "#f1c27d", "#ffdbac"],
  dark_1: ['#582F26', '#6f4f1d', '#9D5B39'],
  dark_2: [
    // "#C68C73",
    '#2b1a10',
    '#482401',
    // "#6f4f1d",

    // '#9c7248',

    // '#926a2d',
    // '#876127',
    // '#7c501a',
    '#261817',
  ],
  // zombie palettes
  // zombien model 1
  zombie: [
    '#848a71',
    '#839b9b',
    '#b5b69c',
    '#7d7e73',
    // '#876969',
    // '#6d4141',
    // '#422020',
  ],
  zombie_diet: [
    '#cdffb0',
    '#a4cc8c',
    '#7b9969',
    // '#526646',
    // '#293323',
  ],
  zombie_og: [
    '#7c887d',
    '#caffff',
    '#576767',
    // '#C41A29',
    // '#558107',
    // '#caffff',
    // "#818181",
  ],
  alien_blueish: [
    // '#e0ac69',
    '#3A8CEA',
    '#0b1733',
    '#04ACEF',
    // '#337450',
    // '#C41A29',
    // '#558107',
    // "#818181",
  ],
  alien_reddish: [
    // '#7c887d',
    '#6C2300',
    '#FDB5FE',
    '#a41b26',
    '#251414',
  ],
  alien_dark: [
    // '#f1c27d',
    // "#818181",
    // "#f1c27d",
    // "#ffdbac"
    // '#ffe76c',
    // '#ffdbac',
  ],
}

const skinPaletteIndex = [
  'mixed',
  'mixed_light',
  'light_1',
  'dark_1',
  'light_2',
  'dark_2',
  'reddish',
  'yellowish',
  'alien_blueish',
  'zombie',
  'alien_reddish',
  'zombie_diet',
]

const rarityScale = [
  13, 24, 32, 40, 44, 48, 52, 56, 59, 61, 63,
]

function getColorNew(byte1, word2) {
  return getColorImpl(
    skinPaletteIndex,
    skinPalettes,
    byte1,
    word2,
    rarityScale
  )
}

module.exports = {
  skinPalettes,
  skinPaletteIndex,
  getColorNew,
}
