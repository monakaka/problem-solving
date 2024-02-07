function calculateMoney(ticketSale) {
    const perTicketPrice = 120;
    const securityGuardCost = 500;
    const totalStuffLunchCost = 50 * 8;
    if (ticketSale > 0) {
        const totalPerDayCost = securityGuardCost + totalStuffLunchCost;

        const totalRevenue = ticketSale * perTicketPrice;
        const totalIncome = totalRevenue - totalPerDayCost;
        return totalIncome;
    }
    else {
        return 'Invalid Number'
    }

}


// problem two solving Way


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


// problem three solving way

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

// const arrayE = { num: [1, 2, 3] };
// const result = deleteInvalids(arrayE);
// console.log(result);

// problem four solving way
// info.name && info.birthYear && info.birthYear.toString().length.length === 4 && info.siteName
function password(info) {

    if (info.name && info.birthYear && info.siteName && info.birthYear.toString().length === 4) {
        const site = info.siteName;
        const si = site.slice(0, 1).toUpperCase().concat(site.slice(1, site.length))

        const pass = si + '#' + info.name + '@' + info.birthYear;
        return pass;
    }
    else {
        return 'invalid'
    }
}
// const userInfo = { name: 'maisha', birthYear: 2002 }
// const resPassword = password(userInfo);
// console.log(resPassword);

// problem 5 
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) && typeof livingCost === 'number') {
        let totalIncome = 0;
        let totalTax = 0;
        for (let payment of arr) {
            totalIncome += payment;
            if (payment > 3000) {
                let tax = payment * 20 / 100;
                totalTax += tax;
            }
        }
        const totalCost = livingCost + totalTax;
        const totalSavings = totalIncome - totalCost;
        if (totalSavings > 0) {
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

const payments = [900, 2700, 3400];
const livingCost = 10000;
const result = monthlySavings(payments, livingCost)
console.log(result);