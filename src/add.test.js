import { add } from './add'
// this is a unit test. its only testing one function/thing that is independent from any other function.
// Its only testing one unit of the project
test('add', () => {
  const value = add(1, 2)
  expect(value).toBe(3)
})
