/*
Analyze word frequency
 */
console.time('Elapsed')

const path = require('path')
const fs = require('fs')
const eol = require('os').EOL
const readline = require('readline')

const inputFile = path.join(__dirname, process.argv[2] || 'input.txt')
const outputFile = path.join(__dirname, process.argv[3] || 'output.txt')

const frequencies = {}
let numWords = 0

const reader = readline.createInterface({
  input: fs.createReadStream(inputFile)
})

reader.on('line', line => {
  if (frequencies[line]) {
    frequencies[line]++
  } else {
    frequencies[line] = 1
  }
  numWords++
})

reader.on('close', _ => {
  console.log(`Successfully analyzed ${numWords} words`)

  let data = ''
  Object.keys(frequencies).forEach(word => {
    data += `${word} occurred ${frequencies[word]} times` + eol
  })

  fs.writeFile(outputFile, data, err => {
    if (err) return console.error('Failed to write file', err)
    console.log('Successfully written')
    console.timeEnd('Elapsed')
  })
})
