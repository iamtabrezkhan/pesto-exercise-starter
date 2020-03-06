const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter(account => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(account => {
    return {
      ...account,
      rounded: Math.round(account.amount)
    };
  });
}

function sumOfBankBalances() {
  const result = bankBalances.reduce((sum, account) => {
    return parseFloat(sum) + parseFloat(account.amount);
  }, 0);
  return parseFloat(result.toFixed(2));
}

function sumOfInterests() {
  // const validStates = ["WI", "IL", "WY", "OH", "GE", "DE"];
  // const accountFromValidStates = bankBalances.filter(account => {
  //   const state = account.state;
  //   return validStates.indexOf(state) !== -1;
  // });
  // const amountWithInterest = accountFromValidStates.map(account => {
  //   let p = parseFloat(account.amount);
  //   const r = 18.9;
  //   const t = 1;
  //   let interest = p * 0.189;
  //   interest = interest.toFixed(2);
  //   interest = parseFloat(interest);
  //   let amount = parseFloat(account.amount);
  //   amount = amount.toFixed(2);
  //   amount = parseFloat(amount);
  //   let result = amount + interest;
  //   result = result.toFixed(2);
  //   return parseFloat(result);
  // });
  // const sum = amountWithInterest.reduce((sum, amount) => {
  //   return (sum += amount);
  // }, 0);
  // console.log(amountWithInterest);
  // return parseFloat(sum.toFixed(2));
}

function higherStateSums() {
  const hashTable = {};
  for (const account of bankBalances) {
    if (hashTable[account.state]) {
      hashTable[account.state] += parseFloat(account.amount);
    } else {
      hashTable[account.state] = parseFloat(account.amount);
    }
  }
  let sum = 0;
  for (const state in hashTable) {
    if (hashTable[state] > 1000000) {
      sum += hashTable[state];
    }
  }
  return sum;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
