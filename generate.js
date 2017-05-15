/*
Generate words randomly
 */
console.time('Elapsed')

const path = require('path')
const fs = require('fs')
const eol = require('os').EOL

const numWords = process.argv[2] || 1000
const srcFile = path.join(__dirname, process.argv[3] || 'dictionary.dat')
const destFile = path.join(__dirname, process.argv[4] || 'input.txt')

fs.readFile(srcFile, 'utf8', (err, data) => {
  if (err) return console.error('Failed to read file', err)

  let words = data.split(eol)
  words.pop() // remove the last empty item
  let length = words.length

  try {
    fs.unlinkSync(destFile)
  } catch (e) {
    // ignore  
  }
  let writer = fs.createWriteStream(destFile)

  let counter = numWords
  while (counter-- > 0) {
    let randIdx = Math.floor(Math.random() * length)
    let line = words[randIdx] + eol
    writer.write(line)
  }

  console.log(`Successfully generated ${numWords} words`)
  console.timeEnd('Elapsed')
})
