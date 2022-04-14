const fs = require('fs')
const xpath = require('xpath')
const { DOMParser: dom } = require('xmldom')

// let defs = getElement('defs')

// var xml = fs.readFileSync('./embrace_ai_11_29_exp1.svg', 'utf8').toString();
var xml = fs.readFileSync('./TheHug.svg', 'utf8').toString()
var select = xpath.useNamespaces({
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
})
var doc = new dom().parseFromString(xml)

console.log('PARSED')

lNames = [
  //main
  // 'shapes', 'shapes2', 'hand', 'bg_2', 'bg_8', 'bg_13',
  //clothes
  'botLF',
  'botLM',
  'botRF',
  'botRM',
  'topLF',
  'topLM', // 'shirt_pattern_left_3', 'shirt_pattern_left_4',
  'topR',
  //hair
  'hairLF1',
  'hairLF2',
  'hairLF3',
  'hairRF1',
  // 'hairRF2',
  // 'hairRF3',
  'hairRM1',
  'hairLM1',
  'skinL_neck',
  'skinR_face',
  // 'shadows',
  // 'bag',
  // 'mountains_day'
]
let classMap = {}
lNames.forEach((el) => {
  var node = select(
    `//g/g[@id='${el}']/path[1]/@class`,
    doc
  )[0]?.toString()
  // var str2 = node?.replace(/\n|\r/g, "") || '<g />';
  if (node) {
    let cls = node.split('"')[1]
    console.log(el, cls)
    classMap[cls] = el
  }
})
lNames.forEach((el) => {
  var node = select(
    `//g/path[@id='${el}']/@class`,
    doc
  )[0]?.toString()
  // var str2 = node?.replace(/\n|\r/g, "") || '<g />';
  if (node) {
    let cls = node.split('"')[1]
    console.log(el, cls)
    classMap[cls] = el
  }
})

var node = select(`//defs`, doc)[0]?.toString()
var defsStr = node?.replace(/\n|\r/g, '') || '<g />'

Object.keys(classMap).forEach((cls) => {
  defsStr = defsStr.replace(
    cls,
    `${cls} \n/*${classMap[cls]}*/\n`
  )
})

let genFile = `
function getDefs(props) {
  let {topL, topR, botL, botR, hairL, hairR} = props
  return \`
${defsStr}
\`
}

module.exports = getDefs; 
`

fs.writeFileSync(`./getDefs_gen.js`, genFile)
