

describe('calculateMonthlyPayment tests', function() {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({
        amount: 10000,
        years: 10,
        rate: .1
      })).toEqual('132.15')
  });
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({
      amount: 5000,
      years: 10,
      rate: 3
    })).toBeCloseTo('1250.00', 2)
  });
})

