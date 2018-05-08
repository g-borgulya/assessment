import Number2Words from './number2Words'

test('0 to be zero', () => {
  const { words } = new Number2Words(0)
  expect(words).toBe('zero')
})
