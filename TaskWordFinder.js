const WordFinder = require('./wordfinder').WordFinder
const readline = require('readline')
const dictionaryFilePath = './dictionary.txt'

class TaskWordFinder {
  main (dictionaryFilePath, inputWord) {
    const wordFinder = new WordFinder(dictionaryFilePath)
    console.log(wordFinder.longestWord(inputWord))
  }
}

const taskWordFinder = new TaskWordFinder()
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Please provide the input word : ', (inputWord) => {
  taskWordFinder.main(dictionaryFilePath, inputWord)

  rl.close()
})
