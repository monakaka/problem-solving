function calculateMoney(ticketSale) {
    const perTicketPrice = 120;
    const securityGuardCost = 500;
    const totalStuffLunchCost = 50 * 8;
    if (ticketSale >= 0) {
        const totalPerDayCost = securityGuardCost + totalStuffLunchCost;
        const totalRevenue = ticketSale * perTicketPrice;
        const totalIncome = totalRevenue - totalPerDayCost;
        return totalIncome;
    }
    else {
        return 'Invalid Number'
    }
}


function checkName(name) {
    const goodSymbol = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
    if (typeof name === "string") {
        const lowerCaseNames = name.toLowerCase();
        const lowerCaseSymbol = [];
        for (let symbol of goodSymbol) {
            lowerCaseSymbol.push(symbol.toLowerCase());
        }
        if (lowerCaseSymbol.includes(lowerCaseNames[lowerCaseNames.length - 1])) {
            return 'Good Name'
        }
        else {
            return 'Bad Name'
        }
    }
    else {
        return 'invalid'
    }
}


function deleteInvalids(array) {
    if (Array.isArray(array)) {
        let outputs = [];
        for (let inf of array) {
            if (typeof inf === 'number' && isNaN(inf) === false) {
                outputs.push(inf);
            }
        }
        return outputs;
    }
    else {
        return 'Invalid Array'
    }
}


function password(obj) {
    if (obj.name && obj.birthYear && obj.siteName && obj.birthYear.toString().length === 4) {
        const site = obj.siteName;
        const si = site.slice(0, 1).toUpperCase().concat(site.slice(1, site.length))

        const pass = si + '#' + obj.name + '@' + obj.birthYear;
        return pass;
    }
    else {
        return 'invalid'
    }
}


function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) && typeof livingCost === 'number') {
        let totalIncome = 0;
        let totalTax = 0;
        for (let payment of arr) {
            totalIncome += payment;
            if (payment >= 3000) {
                let tax = payment * 20 / 100;
                totalTax += tax;
            }
        }
        const totalCost = livingCost + totalTax;
        const totalSavings = totalIncome - totalCost;
        if (totalSavings >= 0) {
            return totalSavings;
        }
        else {
            return 'earn more';
        }
    }
    else {
        return 'invalid input'
    }
}