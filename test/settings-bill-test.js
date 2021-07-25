const assert = require('assert');

const settBill = require('../settings-bill');

 describe('settBill', function () {
    it('Should be able to set call costs, calculate and return the costs of two calls', function () {
        let mySett = settBill();
        mySett.setCallCost(2.00);

        mySett.makeCall();
        mySett.makeCall()

        assert.equal(4.00, mySett.getCallCost());
    })
    it('Should be able to add the costs of calls and smses and return the total', function () {
        let mySett = settBill();
        mySett.setSmsCost(0.75)
        mySett.setCallCost(2.50);

        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();

        assert.equal(10.50, mySett.getSmsCost());
        assert.equal(30.00, mySett.getCallCost());
        assert.equal(40.50, mySett.getTotalCost1());
    })
    it('Should be able to add the costs of calls and smses and return the total', function () {
        let mySett = settBill();
        mySett.setSmsCost(0.75)
        mySett.setCallCost(2.50);

        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeSms();

        assert.equal(18.75, mySett.getSmsCost());
        assert.equal(50.00, mySett.getCallCost());
        assert.equal(68.75, mySett.getTotalCost1());
    })
    describe('setWarningLevel', function () {
        it('Should be able to set the warning level', function () {

            let mySett = settBill();

            mySett.setCallCost(1.80);
            mySett.setSmsCost(0.85);

            mySett.setWarningLevel2(20);
            mySett.setCriticalLevel2(30);

            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();

            assert.equal("warning", mySett.className());
        })
        it('Should be able to set the warning level', function () {

            let mySett = settBill();

            mySett.setCallCost(2.00);
            mySett.setSmsCost(0.50);

            mySett.setWarningLevel2(10);
            mySett.setCriticalLevel2(20);

            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();

            assert.equal("warning", mySett.className());
        })
    })
    describe('setCriticalLevel', function () {
        it('Should be able to set the critical level', function () {

            let mySett = settBill();

            mySett.setCallCost(2.10);
            mySett.setSmsCost(0.90);

            mySett.setWarningLevel2(10);
            mySett.setCriticalLevel2(40);

            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();

            assert.equal('danger', mySett.addClass1())
        })
        it('Should be able to set the critical level', function () {

            let mySett = settBill();
    
            mySett.setCallCost(1.35);
            mySett.setSmsCost(0.85);
    
            mySett.setWarningLevel2(10)
            mySett.setCriticalLevel2(15);
    
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
    
            assert.equal("danger", mySett.addClass1());
        })
    })
    it('Should be able to make two calls at R1.35 each and return the total of two calls', function () {

        let mySett = settBill();

        mySett.setCallCost(1.35);
        mySett.setSmsCost(0.85);

        mySett.makeCall();
        mySett.makeCall();

        assert.equal(2.70, mySett.getTotalCost1());
        assert.equal(2.70, mySett.getTotalCallCost());
        assert.equal(0, mySett.getTotalSmsCost());
    })
    it('Should be able to send 3 smses at 0.85c each and return the total cost', function () {

        let mySett = settBill();

        mySett.setCallCost(2.25);
        mySett.setSmsCost(0.85);

        mySett.makeSms();
        mySett.makeSms();
        mySett.makeSms();

        assert.equal(2.55, mySett.getTotalCost1());
        assert.equal(0, mySett.getTotalCallCost());
        assert.equal(2.55, mySett.getTotalSmsCost());
    })
    describe('setValues', function () {
        it('Should be able to set the cost of an sms and return the amount for 4 smses', function () {

            let mySett = settBill();

            mySett.setCallCost(1.35);
            mySett.setSmsCost(0.85);

            mySett.makeSms();
            mySett.makeSms();
            mySett.makeSms();
            mySett.makeSms();

            assert.equal(3.4, mySett.getTotalCost1());
            assert.equal(0, mySett.getTotalCallCost());
            assert.equal(3.4, mySett.getTotalSmsCost());
        })
        it('Should be able to set sms and call costs, calculate and return the costs of 2 calls and 3 smses', function () {
            let mySett = settBill();
            mySett.setSmsCost(0.75)
            mySett.setCallCost(2.50);

            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();
            mySett.makeSms();
            mySett.makeSms();
            mySett.makeSms();

            assert.equal(2.25, mySett.getSmsCost());
            assert.equal(7.50, mySett.getCallCost());
        })
        it('Should be able to use the values set for the calls and return the total for 3 calls', function () {

            let mySett = settBill();

            mySett.setCallCost(2.25);
            mySett.setSmsCost(0.85);

            mySett.makeCall();
            mySett.makeCall();
            mySett.makeCall();

            assert.equal(6.75, mySett.getTotalCost1());
            assert.equal(6.75, mySett.getTotalCallCost());
            assert.equal(0.00, mySett.getTotalSmsCost());
        })
        it('Should be able to set sms cost and return the costs of 3 smses', function () {
            let mySett = settBill();
            mySett.setSmsCost(0.65)

            mySett.makeSms();
            mySett.makeSms();
            mySett.makeSms();

            assert.equal(1.95, mySett.getSmsCost());
        })
    })
    it('Should be able to send two smes and two calls at R0.85 for an sms and R1.35 for a call', function () {

        let mySett = settBill();

        mySett.setCallCost(1.35);
        mySett.setSmsCost(0.85);

        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();

        assert.equal(4.4, mySett.getTotalCost1());
        assert.equal(2.7, mySett.getTotalCallCost());
        assert.equal(1.7, mySett.getTotalSmsCost());
    })
    
    it('Should be able to set the critical and warning levels', function () {

        let mySett = settBill();

        mySett.setWarningLevel2(20);
        mySett.setCriticalLevel2(30);

        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();
        mySett.makeCall();
        mySett.makeCall();
        mySett.makeSms();

        assert.equal('20', mySett.getWarningLevel2());
        assert.equal('30', mySett.getCriticalLevel2());
    })
})
