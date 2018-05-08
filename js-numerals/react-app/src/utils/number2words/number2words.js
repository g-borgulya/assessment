const ranges = {
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion'
}

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
    if (number !== null && number !== undefined) this.setNumber(number)
  }

  convertNumber = () => {
    const { number } = this
    console.log(number)
    if (number === 0) {
      this.words = `zero`
    } else {
      this.words = `something`
    }
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
