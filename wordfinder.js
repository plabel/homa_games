const dictionaryFileToListOfWords = require('./util').dictionaryFileToListOfWords
const validateWord = require('./util').validateWord

class WordFinder {
  constructor(dictionaryFilePath) {
    this.listOfWords = dictionaryFileToListOfWords(dictionaryFilePath)
  }

  longestWord(inputWord) {
    validateWord(inputWord)

    const arrayOfBuildableWords = []

    for (const word of this.listOfWords) {
      let inputWordCopy = '' + inputWord
      let canContinue = true

      if (word.length > inputWord.length) {
        continue
      }

      for (let i = 0; i < word.length; i++) {
        const letter = word[i]
        const indexOfLetter = inputWordCopy.indexOf(letter)
        if (indexOfLetter === -1) {
          canContinue = false
          break
        } else {
          inputWordCopy = inputWordCopy.split('');
          inputWordCopy.splice(indexOfLetter, 1);
          inputWordCopy = inputWordCopy.join('');
        }
      }

      if (canContinue) {
        arrayOfBuildableWords[word.length] = word
      }
    }

    return arrayOfBuildableWords.pop()
  }
}
module.exports = {
  WordFinder: WordFinder
}
