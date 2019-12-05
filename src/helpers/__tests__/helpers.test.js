import { operations } from '../helpers'

describe('helpers', () => { // describe block
  it('seems to work', () => { // test
    expect(5).toBeDefined() // assertions
    expect(5).toBeTruthy()
    expect(5).toBeGreaterThan(4)
    expect(5).not.toBeFalsy()
    expect(5).toBeLessThanOrEqual(5)
    expect(5).not.toBeNaN()
    expect('5').toMatch(/5/)
    expect(5).toBe(5)
    expect(() => { throw new Error('That sounds like trolling') }).toThrow()
  })

  describe('operations function', () => {
    it('returns something truthy', () => { // test
      expect(operations(2, 3)).toBeDefined() // assertion
      expect(operations(2, 3)).toBeTruthy() // assertion
    })

    it('returns an object', () => {
      expect(operations(2, 3)).toBeInstanceOf(Object)
    })

    it('returns an object with a "sum" key', () => {
      expect(operations(2, 3)).toHaveProperty('sum')
    })

    it('returns an object with a "product" key', () => {
      expect(operations(2, 3)).toHaveProperty('product')
    })

    it('returns an object with a "max" key', () => {
      expect(operations(2, 3)).toHaveProperty('max')
    })

    it('returns an object with a "numbers" key', () => {
      expect(operations(2, 3)).toHaveProperty('numbers')
    })

    it('calculates the right sum', () => {
      expect(operations(2, 3).sum).toBe(5)
    })
    it('calculates the right product', () => {
      expect(operations(2, 3).product).toBe(6)
    })
    it('calculates the right max', () => {
      expect(operations(2, 3).max).toBe(3)
    })
    it('calculates the right numbers', () => {
      expect(operations(2, 3).numbers).toEqual([2, 3])
    })

    it('returns an object of the right shape', () => {
      expect(operations(2, 3)).toEqual({
        sum: 5,
        product: 6,
        max: 3,
        numbers: [2, 3]
      })
    })
  })
})
