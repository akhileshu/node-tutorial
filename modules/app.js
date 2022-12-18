//  ..  we are one level deep
const names=require('./names')
const sayhi=require('./utils')
const data=require('./alternative-flavour')
require('./mind-granade')

console.log(names)

console.log(require('./mind-granade'))

sayhi('akhilesh')
sayhi(names.john)
sayhi(names.peter)