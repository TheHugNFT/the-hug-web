var xpath = require('xpath'),
    dom = require('xmldom').DOMParser,
    fs = require('fs');

// var xml = fs.readFileSync('./embrace_ai_11_29_exp1.svg', 'utf8').toString();
var xml = fs.readFileSync('./embrace_parse_old.svg', 'utf8').toString();
var select = xpath.useNamespaces({
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
});
var doc = new dom().parseFromString(xml)


// var xml = "<book><title>Harry Potter</title></book>"
// var doc = new dom().parseFromString(xml)

// console.log(doc);

console.log("test 1 : " + select('//defs', doc)[0].toString().length);


console.log("test 1 : " + select('//defs', doc)[0].toString().length);
console.log("test 1 : " + select('//g/g | //g/path', doc).map(node => {
    var id = select('attribute::id', node)
    // return id;
    return [id, node.toString().length / 1000]
}).filter(el => el[1] > 10)
);

var allArray = ['Main', 'Clothes', 'Hair', 'Shadows', 'Accessories', 'bg']
var elArray = [
    ['shapes', 'shapes2', 'hand', 'bg_2', 'bg_8', 'bg_13'],
    ['botLF', 'botLM', 'botRF', 'botRM', 'topLF', 'topLM', 'shirt_pattern_left_3', 'shirt_pattern_left_4'],
    ['hairLF1',
        'hairLF2',
        'hairLF3',
        'hairRF1',
        // 'hairRF2',
        // 'hairRF3',
        'hairRM1',
        'hairLM1'
    ],
    ['shadows'],
    ['bag'],
    ['mountains_day']
]

let renderCode = `
import "../lib/Render.sol";

`;

// const genLayersFunc = (cat, all, genDefaultReturn = true) => {
//     var solidity = `
//     function layers${cat}(uint index) internal pure returns (string memory){
//         string memory layerName =
//         ${all}
//         ${genDefaultReturn ? "'';" : ""}
//         return layerName;
//     }
// }
//
// `
//     return solidity;
// }
//
// allArray.forEach((cat, i) => {
//     console.log(cat);
//     var chunks = elArray[i].map((el, index) => {
//         var node = select(`//g/g[@id='${el}'] | //g/path[@id='${el}']`, doc)[0]?.toString()
//         var str2 = node?.replace(/\n|\r/g, "") || '<g />';
//         console.log(el, str2.length)
//         return `(index == ${index}) ? '${el}' :`;
//         // fs.writeFileSync(`./out/clothes_${el}.svg`, node[0].toString());
//     })
//     var all = chunks.join('\n');
//     console.log('cat ', cat, all.length / 1000);
//     renderCode += genRenderFunc(cat, all);
// })

const genRenderFunc = (cat, all, genDefaultReturn = true) => {
    var solidity = `contract Render${cat} is IRender {
    constructor() {}
    function render(uint index, bytes32 seed) external override pure returns (string memory){
        string memory svg = 
        ${all}
        ${genDefaultReturn ? "'';" : ""}
        return svg;
    }
}
 
`
    return solidity;
}

allArray.forEach((cat, i) => {
    console.log(cat);
    var chunks = elArray[i].map((el, index) => {
        var node = select(`//g/g[@id='${el}'] | //g/path[@id='${el}']`, doc)[0]?.toString()
        var str2 = node?.replace(/\n|\r/g, "") || '<g />';
        console.log(el, str2.length/1000)
        return `(index == ${index}) ? '${str2}' :`;
        // fs.writeFileSync(`./out/clothes_${el}.svg`, node[0].toString());
    })
    var all = chunks.join('\n');
    console.log('CAT --', cat, all.length / 1000);
    renderCode += genRenderFunc(cat, all);
})

fs.writeFileSync(`../contracts/gen/RenderClothes.sol`, renderCode);

const enums = allArray.map((cat, i) => {
    var els = elArray[i].join(', ');
    return `
       enum ${cat}Enums { ${els} }
`
}).join('');
//
// let sol = `contract HugEnums {
//        ${enums}
// }`
// fs.writeFileSync(`../contracts/gen/HugEnums.sol`, sol);
//
// const layers = allArray.map((cat, i) => {
//     var els = elArray[i].join(', ');
//     return `
//        enum ${cat}Enums { ${els} }
// `
// }).join('');

let sol = `contract HugEnums {
       ${enums}
}`
fs.writeFileSync(`../contracts/gen/HugEnums.sol`, sol);


var node = select(`//defs`, doc)[0]?.toString()
var str2 = node?.replace(/\n|\r/g, "") || '<g />';
var split = str2.split('</style>')
// var solidity = `contract DefsSvg {
//     string StyleStr =
//         '${split[0]}</style>';
//     string DefsStr2 =
//         '${split[1]}';
// }
// `

console.log('DEFS ', str2.length/1000)
console.log('DEFS1 ', split[0].length/1000)
console.log('DEFS2 ', split[1].length/1000)

let defsCode = `
import "../lib/Render.sol";
    ${genRenderFunc('Defs1', `'${split[0]}</style>';`, false)}
    ${genRenderFunc('Defs2', `'${split[1]}';`, false)}
`;
fs.writeFileSync(`../contracts/gen/DefsSvg.sol`, defsCode);


// console.log("test 2 : " + select('//ODM:Study/GlobalVariables/StudyName/', doc)[0].nodeValue);f