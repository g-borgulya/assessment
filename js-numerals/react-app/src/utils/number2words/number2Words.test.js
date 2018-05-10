import Number2Words from './number2Words'

test('0 to be zero', () => {
  const { words } = new Number2Words(0)
  expect(words).toBe('zero')
})

test('1 to be one', () => {
  const { words } = new Number2Words(1)
  expect(words).toBe('one')
})

test('10 to be ten', () => {
  const { words } = new Number2Words(10)
  expect(words).toBe('ten')
})

test('12 to be twelve', () => {
  const { words } = new Number2Words(12)
  expect(words).toBe('twelve')
})

test('20 to be twenty', () => {
  const { words } = new Number2Words(20)
  expect(words).toBe('twenty')
})

test('37 to be thirty-seven', () => {
  const { words } = new Number2Words(37)
  expect(words).toBe('thirty-seven')
})

test('100 to be one hundred', () => {
  const { words } = new Number2Words(100)
  expect(words).toBe('one hundred')
})

test('101 to be one hundred and one', () => {
  const { words } = new Number2Words(101)
  expect(words).toBe('one hundred and one')
})

test('137 to be one hundred and thirty-seven', () => {
  const { words } = new Number2Words(137)
  expect(words).toBe('one hundred and thirty-seven')
})

test('1000 to be one thousand', () => {
  const { words } = new Number2Words(1000)
  expect(words).toBe('one thousand')
})

test('1100 to be eleven hundred', () => {
  const { words } = new Number2Words(1100)
  expect(words).toBe('eleven hundred')
})

test('1201 to be twelve hundred and one', () => {
  const { words } = new Number2Words(1201)
  expect(words).toBe('twelve hundred and one')
})

test('1237 to be twelve hundred and thirty-seven', () => {
  const { words } = new Number2Words(1237)
  expect(words).toBe('twelve hundred and thirty-seven')
})

test('5137 to be fifty-one hundred and thirty-seven', () => {
  const { words } = new Number2Words(5137)
  expect(words).toBe('fifty-one hundred and thirty-seven')
})

test('12437 to be twelve thousand four hundred and thirty-seven', () => {
  const { words } = new Number2Words(12437)
  expect(words).toBe('twelve thousand four hundred and thirty-seven')
})

test('77437 to be seventy-seven thousand four hundred and thirty-seven', () => {
  const { words } = new Number2Words(77437)
  expect(words).toBe('seventy-seven thousand four hundred and thirty-seven')
})

test('500437 to be five hundred thousand four hundred and thirty-seven', () => {
  const { words } = new Number2Words(500437)
  expect(words).toBe('five hundred thousand four hundred and thirty-seven')
})

test('501437 to be five hundred one thousand four hundred and thirty-seven', () => {
  const { words } = new Number2Words(501437)
  expect(words).toBe('five hundred one thousand four hundred and thirty-seven')
})

test('512437 to be five hundred twelve thousand four hundred and thirty-seven', () => {
  const { words } = new Number2Words(512437)
  expect(words).toBe('five hundred twelve thousand four hundred and thirty-seven')
})

test('6512437 to be six million five hundred twelve thousand four hundred and thirty-seven', () => {
  const { words } = new Number2Words(6512437)
  expect(words).toBe('six million five hundred twelve thousand four hundred and thirty-seven')
})

test('11512437 to be eleven million five hundred twelve thousand four hundred and thirty-seven', () => {
  const { words } = new Number2Words(11512437)
  expect(words).toBe('eleven million five hundred twelve thousand four hundred and thirty-seven')
})

test('84512437 to be eighty-four million five hundred twelve thousand four hundred and thirty-seven', () => {
  const { words } = new Number2Words(84512437)
  expect(words).toBe('eighty-four million five hundred twelve thousand four hundred and thirty-seven')
})

test('999999999999999 to be nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred and ninety-nine', () => {
  const { words } = new Number2Words(999999999999999)
  expect(words).toBe('nine hundred ninety-nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred and ninety-nine')
})
