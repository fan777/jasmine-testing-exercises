describe('calculateMonthlyPayment output tests', () => {
  it('should calculate the monthly rate correctly', () => {
    expect(calculateMonthlyPayment({
        amount: 20000,
        years: 10,
        rate: 10
      })).toEqual('264.30')
  });
  it('should return a result with 2 decimal places', () => {
    expect(calculateMonthlyPayment({
      amount: 5000,
      years: 10,
      rate: 300
    })).toBeCloseTo('1250.00', 2)
  });
})

describe('calculateMonthlyPayment input tests', () => {
  it('should throw error if amount is not a number', () => {
    expect(() => calculateMonthlyPayment({
      amount: 'abc',
      years: 10,
      rate: 10
    })).toThrowError();
  })
  it('should throw error if years is not a number', () => {
    expect(() => calculateMonthlyPayment({
      amount: 5000,
      years: 'abc',
      rate: 10
    })).toThrowError();
  })
  it('should throw error if rate is not a number', () => {
    expect(() => calculateMonthlyPayment({
      amount: 5000,
      years: 10,
      rate: 'abc'
    })).toThrowError();
  })
})