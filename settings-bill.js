module.exports = function settBill() {

    var callUpdate1 = 0;
    var smsUpdate1 = 0;
    var warningLevel2 = 0;
    var criticalLevel2 = 0;

    var callSettTotal = 0;
    var smSettTotal = 0;
    var totalSett = 0;

    var billSettActionList = [];

    function billSett2(billSettEntered) {
        if (totalSett < criticalLevel2) {

            if (billSettEntered === "call") {
                callSettTotal += callUpdate1;
                totalSett += callUpdate1;
            }
            else if (billSettEntered === "sms") {
                smSettTotal += smsUpdate1;
                totalSett += smsUpdate1;
            }
        }
    }
    function billSettAction(billSettAction) {
        let cost = 0;
        if (billSettAction === "call") {
            cost = callUpdate1;
        }
        else if (billSettAction === "sms") {
            cost = smsUpdate1;
        }
        billSettActionList.push({
            type: billSettAction,
            cost,
            timestamp: new Date()
        });
    }
    function getTheList() {
        return billSettActionList;
    }

    function actionsFor(type) {
        const filteredActions = [];
        for (let index = 0; index < billSettActionList.length; index++) {
            const billSettAction = billSettActionList[index];
            if (billSettAction.type === type) {
                filteredActions.push(billSettAction);
            }
        }
        return filteredActions;
    }
    function getTotal(type) {
        let total = 0;
        for (let index = 0; index < billSettActionList.length; index++) {
            const billSettAction = billSettActionList[index];
            if (billSettAction.type === type) {
                total += billSettAction.cost;
            }
        }
        return total;
    }
    function grandTotal() {
        return getTotal('sms') + getTotal('call');
    }
    function totals() {
        let smsTotal = getTotal('sms')
        let callTotal = getTotal('call')
        return {
            smsTotal,
            callTotal,
            grandTotal : grandTotal()
        }
    }
    function warningLevelExpress(){
        const total = grandTotal();
        const reachedWarningLevel = total >= warningLevel 
            && total < criticalLevel;

        return reachedWarningLevel;
    }
    function criticalLevelEpress(){
        const total = grandTotal();
        return total >= criticalLevel;
    }
    function setCallCost(setCall) {
        callUpdate1 = parseFloat(setCall);
    }
    function getCallCost() {
        return callSettTotal.toFixed(2);
    }
    function getCallCostEpress() {
        return callUpdate1;
    }
    function setSmsCost(setSms) {
        smsUpdate1 = parseFloat(setSms);
    }
    function getSmsCost() {
        return smSettTotal.toFixed(2);
    }
    function getSmsCostExpress() {
        return smsUpdate1;
    }
    function makeCall() {
        callSettTotal += callUpdate1;
        totalSett += callUpdate1;
    }
    function makeSms() {
        smSettTotal += smsUpdate1;
        totalSett += smsUpdate1;
    }
    function setTotalCost1() {
        totalSett = makeCall() + makeSms();
    }
    function getTotalCost1() {
        return totalSett.toFixed(2);
    }
    function setWarningLevel2(warning2) {
        warningLevel2 = parseFloat(warning2);
    }
    function getWarningLevel2() {
        return warningLevel2;
    }
    function setCriticalLevel2(critical2) {
        criticalLevel2 = parseFloat(critical2);
    }
    function getCriticalLevel2() {
        return criticalLevel2;
    }
    function addClass1() {
        if (totalSett >= criticalLevel2) {
            return "danger"
        }
        else if (totalSett >= warningLevel2) {
            return "warning"
        }
    }
    function getTotalCallCost() {
        return callSettTotal;
    }
    function getTotalSmsCost() {
        return smSettTotal;
    }

    function className() {
        if (getTotalCost1() >= getWarningLevel2() & getTotalCost1() < getCriticalLevel2()) {
            return "warning"
        }
        if (getTotalCost1() >= getWarningLevel2() & getTotalCost1() >= getCriticalLevel2()) {
            return "critical"
        }
    }
    return {
        getCallCost,
        billSett2,
        getSmsCost,
        setTotalCost1,
        getTotalCost1,
        setWarningLevel2,
        getWarningLevel2,
        setCriticalLevel2,
        getCriticalLevel2,
        makeSms,
        addClass1,
        setCallCost,
        setSmsCost,
        makeCall,
        getTotalCallCost,
        getTotalSmsCost,
        className,
        getCallCostEpress,
        getSmsCostExpress,
        billSettAction,
        getTheList,
        warningLevelExpress,
        criticalLevelEpress,
        totals,
        actionsFor,
    }
}