describe('helpers', () => {
  it('jest is working', () => {
    expect(5).toBeDefined()
    expect(5).toBeTruthy()
    expect(5).toBeGreaterThan(4)
    expect(5).not.toBeFalsy()
    expect(5).toBeLessThanOrEqual(5)
    expect(5).not.toBeNaN()
    expect('5').toMatch(/5/)
    expect(() => { throw new Error('That sounds like trolling') }).toThrow()
  })
})
