describe('suite 1', () => {
  it('works', () => {
    expect(true).toBe(true);
  })

  it('does not work', () => {
    expect(true).toBe(false);
  })
})

describe('suite 2', () => {
  it('does not work either', () => {
    expect(true).toBe(false);
  })
})