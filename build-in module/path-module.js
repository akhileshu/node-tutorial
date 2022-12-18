const path = require('path')

console.log(path.sep) //gives path separator


// Join all arguments together and normalize the resulting path.
const filepath=path.join('/content', 'subfolder','test.txt')
console.log(filepath)

// get basename
const base=path.basename(filepath) 
console.log(base)

// get absolute path C:\Users\dell\OneDrive\Desktop\node tutorial\build-in module\content\subfolder\test.txt
const absolute=path.resolve(__dirname,'content', 'subfolder','test.txt')
console.log(absolute)
