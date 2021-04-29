const fs = require('fs')

function dictionaryFileToListOfWords(dictionaryFilePath) {
  const str = fs.readFileSync(dictionaryFilePath, {
    encoding: 'utf8'
  })
  const listOfWords = str.split('\n')

  return listOfWords
}

function validateWord(word) {
  let ok = /^[a-zA-Z()]+$/.test(word)
  ok = ok + (word.length <= 12)
  if (!ok) {
    throw new TypeError("word is either more than 12 char or is not alphabetic only")
  }
}
module.exports = {
  dictionaryFileToListOfWords: dictionaryFileToListOfWords,
  validateWord: validateWord
}
