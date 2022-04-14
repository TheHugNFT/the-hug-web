let random = require('random-seed')

function countMap() {
  let _map = {}
  return {
    incr: function (key) {
      // console.log('MAP', key, _map[key])
      if (_map[key] || _map[key] === 0) {
        _map[key] = _map[key] + 1
      } else {
        _map[key] = 0
      }
    },
    map: _map,
  }
}

let counts = countMap()

const getGenderAndLayers = function (byte, hairByte) {
  const rand = random.create(byte + 100) // 100 = good number found from simulation
  // const randBool = function () {
  //     let bool = !!Math.round(rand.random());
  //     // console.log('bool', bool)
  //     return  bool;
  // };
  let randomInt = function (min, max) {
    return Math.floor(rand.random() * max) + min
  }

  const clothesLayers = ['hair', 'top', 'bot']
  let nominalGender
  let maleProb
  let metaName
  if (byte < 140 - 20) {
    // female
    maleProb = 0
    nominalGender = 'F'
    metaName = 'Woman'
  } else if (byte < 140) {
    // genderMixF
    maleProb = 0.4
    nominalGender = 'F'
    metaName = 'Gender Mix F'
  } else if (byte < 140 + 20) {
    maleProb = 0.6
    nominalGender = 'M'
    metaName = 'Gender Mix M'
  } else {
    maleProb = 1
    nominalGender = 'M'
    metaName = 'Man'
  }
  let actualClothesLayers = clothesLayers.map((layer) => {
    return layer + (rand.random() < maleProb ? 'M' : 'W')
    // if (maleProb === 0) return 'F'
    // else if (maleProb === 1) return 'M'
    // else if (maleProb === 0.4) {
    //     return layer + (rand.random() < 0.4 ? 'M' : 'F');
    // } else {
    //     return layer + (rand.random() < 0.6 ? 'M' : 'F');
    // }
  })
  // let hairGender = 'hair' + rand.random() < maleProb ? "M" : 'F'
  // clothesLayers.push(hairGender);
  // console.log(actualClothesLayers)

  // return [metaName, actualClothesLayers]
  let genderExpressions = {}
  let expressedGender = actualClothesLayers.map((str) => {
    // let split = str.slice(0, 2)
    // let [layer, MorF] = split;
    let layer = str.slice(0, 3)
    let MorF = str.slice(3)
    // genderExpressions[layer] = MorF === 'M';
    return MorF
  })

  let joined = expressedGender.join('')
  let countF = (joined.match(/W/g) || []).length
  let countM = (joined.match(/M/g) || []).length
  // console.log(countF)
  let genderNominal =
    countF >= 2
      ? 'Woman'
      : countM >= 2
      ? 'Man'
      : // countF > 1 ? 'GenderMixW' :
        // countM > 1 ? 'GenderMixM' :
        'ERROR GENDER'
  let genderFM = genderNominal === 'Woman' ? 'F' : 'M'
  let gender_count =
    genderNominal === 'Woman'
      ? 'W-' + countF
      : 'M-' + countM
  // return [name, actualClothesLayers]
  return [
    actualClothesLayers.join('-'),
    actualClothesLayers,
    genderNominal,
    genderFM,
    gender_count,
  ]
}

for (let i = 0; i < 256; i++) {
  let [
    metaName,
    actualClothesLayers,
    expressed,
    e2,
    genderCount,
  ] = getGenderAndLayers(i)
  // console.log(metaName )
  // console.log(actualClothesLayers )
  // console.log(expressed )

  // for (let j = 0; j < 256; j++) {
  //     let [metaName2, actualClothesLayers] = getGenderAndLayers(j);
  //     counts.incr(metaName + ' - ' + metaName2)
  // }

  // console.log(theColor)
  // counts.incr(paletteName);
  counts.incr(genderCount)
  // counts.incr(actualClothesLayers.join(' - '))
}

console.log(counts.map)

module.exports = getGenderAndLayers
