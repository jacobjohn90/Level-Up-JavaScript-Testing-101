import { total } from './App'
import { add } from './add'

//mock function
jest.mock('./add', () => ({
  add: jest.fn(() => 25),
}))

//this is a integration test because its testing one function that is dependent on another function.
test('total', () => {
  expect(total(5, 20)).toBe('$25')
  //spy
  expect(add).toHaveBeenCalledTimes(1)

  //redundent
  add.mockImplementation(() => 30)
  expect(total(5, 25)).toBe('$30')
  expect(add).toHaveBeenCalledTimes(2)
})
