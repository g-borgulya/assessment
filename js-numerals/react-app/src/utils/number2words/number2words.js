export default class Number2Words {
  static checkNumberSanity = number => {
    const intNumber = parseInt(number)
    if (
      !isNaN(intNumber) &&
      intNumber === parseFloat(number) &&
      intNumber >= 0
    ) return true
    return false
  }

  constructor(number) {
    this.number = null
    this.words = null
    if (number) this.setNumber(number)
  }

  convertNumber = () => {
    const { number } = this
    this.words = `${number}`
  }

  setNumber = number => {
    if (!Number2Words.checkNumberSanity(number)) {
      throw new Error('Use a positive integer or zero')
    }
    this.number = parseInt(number)
    this.convertNumber()
    return this.words
  }
}

if (require.main === module) {
  const arg = process.argv[2]
  if (!arg) {
    console.log(`
  Usage:
        node number2Words.js number
  Where:
        number - positive integer or zero
    `)
  } else {
    try {
      const number2Words = new Number2Words(arg)
      console.log(number2Words.words)
    } catch(e) {
      console.log(`Error: ${e.message}`)
    }
  }
}
