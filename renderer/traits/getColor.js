function getColorImpl(
  paletteIndex,
  palettes,
  byte,
  word2,
  rarityScale
  // rarityScale2
) {
  let i, j
  for (i = 0; i < rarityScale.length; i++) {
    // console.log('---for', i, byte, rarityScale[i])
    if (byte / 4 < rarityScale[i]) {
      console.log('---break', i, byte, rarityScale[i])
      break
    }
  }
  console.log('---index 1', i)
  let scheme = paletteIndex[i]
  console.log('---scheme', scheme)

  // second index
  let secondNum = word2 > -1 ? word2 : byte

  // for (j = 0; j < rarityScale2.length; j++) {
  //   if (word2 < rarityScale2[j]) break
  // }

  // console.log('GET COLOR', scheme, rarity2)
  let color =
    palettes[scheme][secondNum % palettes[scheme].length]

  console.log('GET COLOR2', color)
  // console.log('color', color)
  return [color, scheme, i]
}

module.exports = { getColorImpl }
