describe('Payments test (with setup and tear-down', function() {
    beforeEach(function() {
        billAmtInput.value = 10;
        tipAmtInput.value = 20;
    })

    it('should add a new payment to allPayments on submitPaymentInfo()', function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('10');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('20');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(200);
    })

    it('should return payment object on createCurPayment()', function() {
        expect(createCurPayment()).toEqual({
            billAmt: "10",
            tipAmt: "20",
            tipPercent: 200
        });
    })

    it('should add a row with payment info on appendPaymentTable()', function() {
        submitPaymentInfo();
    
        let newTr = document.createElement('tr');
        newTr.setAttribute('id', 'server1');
        appendTd(newTr, 'Alice');
        appendTd(newTr, '$0.00');
    
        let checkTr;
        for (let server in allServers) {
          if (allServers[server].serverName === 'Alice') {
            checkTr = serverTbody.querySelector(`#${server}`);
            expect(checkTr).toEqual(newTr);
          }
        }
      });

    afterEach(function() {
        for (let payment in allPayments) {
            document.getElementById(payment).remove();
            delete allPayments[payment];
            paymentId--;
        }
    })
})