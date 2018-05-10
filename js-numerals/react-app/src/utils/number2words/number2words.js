const ranges = {
  0: '',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion'
}

const numberNames = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

export default class Number2Words {
  static checkNumberSanity = number => {
    // return true if input is a positive integer
    const intNumber = parseInt(number, 10)
    if (
      !isNaN(intNumber) &&
      intNumber === parseFloat(number, 10) &&
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
    // builds words from this.number and stores it in this.words
    const { number } = this
    const limits = Object.keys(ranges).map(r => parseInt(r, 10)).sort((a, b) => b - a)
    const upperLimit = limits[0] * 1000 - 1
    if (number > upperLimit) {
      throw new Error(`Use a number less than or equal to ${upperLimit}`)
    }
    if (number === 0) {
      // keep this special case simple
      this.words = numberNames[number]
      return
    } else if (number === 1000) {
      // otherwise for thousends we use terms like 'twelve-hundred'
      this.words = `${numberNames[1]} ${ranges[1000]}`
      return
    }

    const wordBlocks = []
    limits.forEach(limit => {
      if (number >= limit) {
        if (limit === 0) {
          const measure = number % 100
          wordBlocks.push({
            rangeName: ranges[limit],
            measure
          })
        } else if (limit === 100 && number < 10000) {
          // special case of double hundreds like 'twelve hundred'
          const measure = Math.floor(number / 100)
          wordBlocks.push({
            rangeName: ranges[limit],
            measure
          })
        } else if (limit === 1000 && number < 10000) {
          // skip this case as it's covered with double hundreds
        } else if (limit === 100 && number >= 10000) {
          // case of single hundreds like 'one hundred'
          const measure = Math.floor((number % 1000) / limit)
          wordBlocks.push({
            rangeName: ranges[limit],
            measure
          })
        } else if (limit !== 100) {
          const measure = Math.floor((number % (limit * 1000)) / limit)
          wordBlocks.push({
            rangeName: ranges[limit],
            measure
          })
        }
      }
    })
    wordBlocks.forEach(block => {
      const hundreds = Math.floor(block.measure / 100)
      const tens = Math.floor((block.measure % 100) / 10)
      const ones = (block.measure % 10)
      let wordfragment = ''
      if (hundreds !== 0 || tens !== 0 || ones !== 0) {
        const wordfragments = {
          hi: '',
          low: ''
        }
        if (tens === 0 && ones === 0) {
          // skip
        } else if (tens < 2) {
          wordfragments.low = numberNames[ones + tens * 10]
        } else if (ones === 0) {
          wordfragments.low = numberNames[tens * 10]
        } else {
          wordfragments.low = `${numberNames[tens * 10]}-${numberNames[ones]}`
        }
        // including the special case of double hundreds like 'twelve hundred'
        if (hundreds < 21 && hundreds > 0) {
          wordfragments.hi = `${numberNames[hundreds]} ${ranges[100]}`
        } else if (hundreds > 20) {
          const thousands = Math.floor((hundreds % 100) / 10)
          const hundred = (hundreds % 10)
          if (thousands < 20) {
            wordfragments.hi = `${numberNames[hundred + thousands]} ${ranges[100]}`
          } else if (hundred === 0) {
            wordfragments.hi = `${numberNames[thousands]} ${ranges[100]}`
          } else {
            wordfragments.hi =
              `${numberNames[thousands]}-${numberNames[hundred]} ${ranges[100]}`
          }
        }
        wordfragment =
          `${
            wordfragments.hi
          }${
            (wordfragments.hi && wordfragments.low) ? ' ' : ''
          }${
            wordfragments.low
          }`
      }
      if (wordfragment !== '') {
        block.wordfragment =
          `${wordfragment}${block.rangeName ? ' ': ''}${block.rangeName}`
      }
    })
    // skip blocks without content (like zeros in the middle of the number)
    const filteredWordBlocks = wordBlocks.filter(block => block.wordfragment)
    this.words =
      `${
        filteredWordBlocks.slice(0, -1).map(b => b.wordfragment).join(' ')
      }${
        filteredWordBlocks.length > 1 ? ' and ' : ''
      }${
        filteredWordBlocks.slice(-1)[0].wordfragment
      }`
  }

  setNumber = number => {
    if (!Number2Words.checkNumberSanity(number)) {
      throw new Error('Use a positive integer or zero')
    }
    this.number = parseInt(number, 10)
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
      console.error(e)
    }
  }
}
