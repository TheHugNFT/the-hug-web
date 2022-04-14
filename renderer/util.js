const { overlappingBytes } = require('../util/wordSlicer')
const getGenderLayers = require('../traits/genderAndLayers')
const getSkinColor = require('../traits/skin')
const { getTraits } = require('../traits2')
const { getBackgroundLayer } = require('../traits2/util')

function getAttributes(seed) {
  let attributes = []

  function attributeItem(trait_type, value, rarity) {
    if (rarity <= 1) return
    let obj = {
      trait_type,
      value,
    }
    attributes.push(obj)
  }

  // {   TEMPLATE
  //     "trait_type": "Setting",
  //     "value": "Abstract Lava"
  // },
  // const seedBytes = overlappingBytes(seed, 2)
  // let traitsMetaL = getGenderLayers(seedBytes[0])
  // let traitsMetaR = getGenderLayers(seedBytes[1])
  // let genderCombined = `${traitsMetaL[2]}{}${traitsMetaR[2]}`
  // attributes.push(
  //   attributeItem('Gender Expression', traitsMetaL[0])
  // )
  // attributes.push(
  //   attributeItem('Gender Expression', traitsMetaR[0])
  // )
  // attributes.push(
  //   attributeItem('Gender Combined', genderCombined)
  // )

  function formatColorAttr(map, item) {
    console.log('format', map, item)
    return `${map[item][2]}-${map[item][1]}-${map[item][0]}`
  }
  function colorAttrItem(item, label) {
    //check if rare
    if (allColors[item][2] <= 1) return
    attributeItem(
      label || item,
      formatColorAttr(allColors, item)
    )
  }
  function skinAttrItem(item, label) {
    //check if rare
    if (allColors[item][2] <= 3) return
    attributeItem(
      label || item,
      formatColorAttr(allColors, item)
    )
  }

  const traits = getTraits(seed)
  let { allColors, bgLayer } = traits
  skinAttrItem('skinL')
  skinAttrItem('skinR')
  skinAttrItem('hairL')
  skinAttrItem('hairR')
  colorAttrItem('topL', 'shirtL')
  colorAttrItem('topR', 'shirtR')
  colorAttrItem('botL', 'bottomL')
  colorAttrItem('botR', 'bottomR')

  function bgAttrItem(item, label) {
    //check if rare
    if (allColors[item][2] <= 3) return
    attributeItem(
      label || item,
      formatColorAttr(allColors, item)
    )
  }
  let bg = getBackgroundLayer(seed)
  attributeItem('background', bg)

  // attributeItem(
  //   'bottomL',
  //   formatColorAttr(allColors, 'botL')
  // )
  // attributeItem(
  //   'bottomR',
  //   formatColorAttr(allColors, 'botR')
  // )

  // let skinPaletteL = getSkinColor(seedBytes[2])[1]
  // attributes.push(attributeItem('Skin L', skinPaletteL))
  // attributes.push(
  //   attributeItem('Skin Uni', skinPaletteL)
  // )
  //
  // let skinPaletteR = getSkinColor(seedBytes[3])[1]
  // attributes.push(attributeItem('Skin L', skinPaletteR))
  // attributes.push(
  //   attributeItem('Skin Uni', skinPaletteR)
  // )

  return attributes
}

function getAttributesText(seed) {
  let attrs = getAttributes(seed)
  let asText = attrs
    .map((attr) => {
      return `${attr.trait_type}: ${attr.value}`
    })
    .join('\n')
  return asText
}

function getMeta(seed, tokenId) {
  const data = {
    name: `Hug #${tokenId}`,
    image: `https://metadata-hug.herokuapp.com/art/${seed}`,
    attributes: getAttributes(seed),
  }
  console.log('meta', data)
  return data
}

module.exports = {
  getAttributes,
  getAttributesText,
  getMeta,
}
