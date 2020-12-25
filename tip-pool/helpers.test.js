describe('Helpers test (with setup and tear-down)', function() {
    beforeEach(function() {
        allPayments['payment1'] = {
            billAmt: 10,
            tipAmt: 10,
            tipPercent: calculateTipPercent(10, 10),
        };
        allPayments['payment2'] = {
            billAmt: 20,
            tipAmt: 5,
            tipPercent: calculateTipPercent(20, 5),
        };
    });

    it('should sum the total for billAmt, tipAmt, tipPercent types in allPayment objects', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(30);
        expect(sumPaymentTotal('tipAmt')).toEqual(15);
        expect(sumPaymentTotal('tipPercent')).toEqual(125);
    });

    it('should calculate tip percent in calculateTipPercent()', function() {
        expect(calculateTipPercent(10, 10)).toEqual(100);
    });

    afterEach(function() {
        for (let payment in allPayments) {
            delete allPayments[payment];
        }
    })
});