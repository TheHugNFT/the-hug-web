const {
  getColorClothes,
  // getColorSkin,
  // getColorHair,
  getHairStyle,
  getBackgroundLayer,
} = require('./traits2_util')
const getGenderLayers = require('../genderAndLayers')
const {
  overlappingBytes,
  sliceIntoChunks,
} = require('../util/wordSlicer')
const { getColorNew } = require('../traits/traitSkinColor')
const {
  getColorHair,
} = require('../traits/traitsHairColor')
const {
  getClothesColors,
} = require('../traits/traitsClothesColors')

function getTraits(seed) {
  const seedBytes = overlappingBytes(seed)
  const seedWords = sliceIntoChunks(seed, 1)
  console.log('getTraits seedBytes', seedBytes)

  let [clothesMetaLabelL, clothesMetaArrayL, genderL] =
    getGenderLayers(seedBytes[0])
  let [clothesMetaLabelR, clothesMetaArrayR, genderR] =
    getGenderLayers(seedBytes[1])

  let clothesColors = {
    topL: getClothesColors(
      genderL,
      'top',
      seedBytes[4],
      seedWords[16]
    ),
    topR: getClothesColors(
      genderR,
      'top',
      seedBytes[5],
      seedWords[17]
    ),
    botL: getClothesColors(
      genderL,
      'bot',
      seedBytes[6],
      seedWords[18]
    ),
    botR: getClothesColors(
      genderR,
      'bot',
      seedBytes[7],
      seedWords[19]
    ),
  }
  let skinColors = {
    // skinL: getColorSkin(seedWords[2], seedWords[3]),
    // skinR: getColorSkin(seedWords[4], seedWords[5]),
    skinL: getColorNew(seedBytes[2], -1),
    skinR: getColorNew(seedBytes[4], -1),
  }
  let hairColors = {
    // hairL: getColorHair(seedWords[6], seedWords[7]),
    // hairR: getColorHair(seedWords[8], seedWords[9]),
    hairL: getColorHair(seedBytes[6], -1),
    hairR: getColorHair(seedBytes[8], -1),
  }
  let allColors = {
    ...clothesColors,
    ...skinColors,
    ...hairColors,
  }
  console.log('-------------- all', allColors)
  let allColorsValues = {}
  let xx = Object.keys(allColors).map((i) => {
    allColorsValues[i] = allColors[i][0]
  })

  let hairStyles = {
    hairL: getHairStyle(
      'L',
      getGenderLayers(seedBytes[0])[3],
      seedWords[6]
    ),
    hairR: getHairStyle(
      'R',
      getGenderLayers(seedBytes[1])[3],
      seedWords[7]
    ),
  }

  let spliceStr = function (str, side, hair) {
    let arr = Array.from(str)
    arr.splice(hair ? 4 : 3, 0, side)
    let res = arr.join('')
    // console.log("SPLICED ------------ ", res)
    res = res.replace('W', 'F')
    return res
  }

  let topL = spliceStr(clothesMetaArrayL[1], 'L')
  // let topR = getGenderLayers(1)[1][1].replace('_','R')
  let botL = spliceStr(clothesMetaArrayL[2], 'L')
  let botR = spliceStr(
    getGenderLayers(seedBytes[1])[1][2],
    'R'
  )
  let clothesLayers = [topL, botL, botR]

  let bgLayer = getBackgroundLayer(seedBytes[20])

  // console.log('COLORS', allColors)
  // console.log('CLOTHES', clothesLayers)

  return {
    allColors,
    allColorsValues,
    hairStyles,
    clothesLayers,
    bgLayer,
  }
}

module.exports = { getTraits }
