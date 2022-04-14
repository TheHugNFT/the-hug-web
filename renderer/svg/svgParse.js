var xpath = require('xpath'),
  dom = require('xmldom').DOMParser,
  fs = require('fs')
const { join, resolve } = require("path");

const templateDirectory = resolve(process.cwd(), "renderer/svg");

// var xml = fs.readFileSync('./embrace_ai_11_29_exp1.svg', 'utf8').toString();
var xml = fs
  .readFileSync(join(templateDirectory, "TheHug.svg"), 'utf8')
  .toString()
var select = xpath.useNamespaces({
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
})
var doc = new dom().parseFromString(xml)

let cache = new Map()

function getElement(el) {
  if (cache.has(el)) return cache.get(el)

  var node = select(
    `//g/g[@id='${el}'] | //g/path[@id='${el}']`,
    doc
  )[0]?.toString()
  var str2 = node?.replace(/\n|\r/g, '') || '<g />'
  console.log(el, str2.length / 1000)
  cache.set(el, str2)

  return str2
}

// function getDefs() {
//     const el = 'defs'
//     if (cache.has(el)) return cache.get(el)
//
//     var defs = fs.readFileSync('./svg/Defs.svg', 'utf8').toString();
//     cache.set(el, defs);
//     return defs
//
//     var node = select(`//defs`, doc)[0]?.toString()
//     var str2 = node?.replace(/\n|\r/g, "") || '<g />';
//     cache.set(el, str2);
//     return str2
//
// }

module.exports = {
  getElement,
  // getDefs
  // layers
}
