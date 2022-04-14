let { palettes, allPalettes } = require('../traits/palettes')
let {
  skinPalettes,
  skinPaletteIndex,
} = require('../traits/paletteSkin')
const {
  hairPaletteIndex,
  hairPalettes,
} = require('../traits/paletteHair')

function getColorClothes(gender, piece, word1, word2) {
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
  return getColor(
    paletteIndex,
    palettes,
    word1,
    word2,
    rarityScale1,
    rarityScale2
  )
}

function getColorSkin(word1, word2) {
  let rarityScale1 = [4, 7, 10, 13, 14, 15]
  // let rarityScale2 = [1, 4, 12, 15]
  let rarityScale2 = [6, 10, 13, 15]

  // let paletteIndex = allPalettes[gender][piece]
  return getColor(
    skinPaletteIndex,
    skinPalettes,
    word1,
    word2,
    rarityScale1,
    rarityScale2
  )
}

function getColorHair(word1, word2) {
  let rarityScale1 = [4, 7, 10, 13, 15]
  // let rarityScale2 = [1, 4, 12, 15]
  let rarityScale2 = [6, 10, 13, 15]

  // let paletteIndex = allPalettes[gender][piece]
  return getColor(
    hairPaletteIndex,
    hairPalettes,
    word1,
    word2,
    rarityScale1,
    rarityScale2
  )
}

function getColor(
  paletteIndex,
  palettes,
  word1,
  word2,
  rarityScale1,
  rarityScale2
) {
  let rarity1, rarity2
  for (
    rarity1 = 0;
    rarity1 < rarityScale1.length;
    rarity1++
  ) {
    // console.log('for', i, word1, rarityScale1[i])
    if (word1 < rarityScale1[rarity1]) {
      // console.log('break')
      break
    }
  }
  // console.log('index 1', i)
  let scheme = paletteIndex[rarity1]
  // console.log('scheme', p[i])
  for (
    rarity2 = 0;
    rarity2 < rarityScale2.length;
    rarity2++
  ) {
    if (word2 < rarityScale2[rarity2]) break
  }
  console.log('GET COLOR', scheme, rarity2)
  let color = palettes[scheme][rarity2]
  console.log('GET COLOR2', color)
  // console.log('color', color)
  return [color, scheme, rarity1]
}

function getHairStyle(side, gender, word1) {
  let rarityScaleL = [8, 14]
  let rarityScaleR = [8, 13]
  let rarityScale1 =
    side === 'R' ? rarityScaleR : rarityScaleL
  let i = 0
  if (gender === 'F') {
    for (i = 0; i < rarityScale1.length; i++) {
      // console.log('for', i, word1, rarityScale1[i])
      if (word1 < rarityScale1[i]) {
        // console.log('break')
        break
      }
    }
  } else {
    if (word1 >= 12) {
      gender = 'F'
    }
  }
  let layer = `hair${side}${gender}${i + 1}`
  console.log('HAIR LAYER', layer)
  return layer
}

const backgroundPaletteIndex = [
  '',
  'bg_13',
  'bg_2',
  'bg_3',
  'bg_4',
  'bg_6',
  'bg_city_dusk',
  'mountains_day',
  'bg_9',
  'bg_10',
  'bg_11',
  'bg_14',
  'bg_15',
  'bg_16',
  'bg_18',
  'bg_16',
]
// let bgRarityScale = [10, 12, 14, 16, 18, 20, 22, 24, 26]

function getBackgroundLayer(byte) {
  // let bg = word1 === 0 ? "bg_13" :
  //     word1 === 1 ? "bg"
  //
  let word = byte / 4
  let rarityScale1 = [
    10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 40, 50, 55,
  ]
  let i
  for (i = 0; i < rarityScale1.length; i++) {
    // console.log('for', i, word1, rarityScale1[i])
    if (word < rarityScale1[i]) {
      // console.log('break')
      break
    }
  }
  console.log(
    '---getBackgroundLayer',
    i,
    backgroundPaletteIndex[i]
  )
  return backgroundPaletteIndex[i]

  // let bg
  // if (word === 0) bg = ['indoor_1']
  // else if (word === 2) bg = ['indoor_2']
  // else if (word === 3) bg = ['bg_3']
  // else if (word === 4) bg = ['bg_4']
  // else if (word === 5) bg = ['bg_6']
  // else if (word <= 7) bg = ['bg_city_dusk']
  // else if (word <= 9) bg = ['mountains_day', 'sky_day']
  // else if (word <= 11) bg = ['mountains_1', 'sky_night_2']
  // return bg
}

const watchPaletteIndex = [
  '',
  'WATCH_1',
  'WATCH_2',
  'WATCH_3',
]

function getWatch(byte) {
  let rarityScale1 = [4, 7, 10, 13, 15]
  let i
  for (i = 0; i < rarityScale1.length; i++) {
    // console.log('for', i, word1, rarityScale1[i])
    if (byte < rarityScale1[i]) {
      // console.log('break')
      break
    }
  }
  return watchPaletteIndex[i]
}

module.exports = {
  getColorClothes,
  getColorSkin,
  getColorHair,
  getHairStyle,
  getBackgroundLayer,
  getWatch,
}
