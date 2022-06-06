export function getSum(dat) {
  const sum = dat.reduce(
    (previousVal, currentVal) => previousVal + currentVal,
    0
  );
  return sum;
}

export function collapseContinuous(data, threshold) {
  const dataLow = data.filter((d) => Object.values(d)[0] < threshold);
  const dataHigh = data.filter((d) => Object.values(d)[0] >= threshold);

  const dataHighSum = {
    _row: `${threshold}+`,
    positive: getSum(dataHigh.map((d) => d.positive)),
    total: getSum(dataHigh.map((d) => d.total)),
  };
  dataHighSum.uwt_prev =
    Math.round((dataHighSum.positive / dataHighSum.total) * 100 * 10) / 10;

  const dataFinal = dataLow.concat(dataHighSum);

  return dataFinal;
}

export function recodeNA(data) {
  const code_na = [-92, -91, -77];

  const data_noNA = data.filter((d) => !code_na.includes(Object.values(d)[0]));
  const dataNA = data.filter((d) => code_na.includes(Object.values(d)[0]));

  const dataNASum = {
    _row: "NA",
    positive: getSum(dataNA.map((d) => d.positive)),
    total: getSum(dataNA.map((d) => d.total)),
  };
  dataNASum.uwt_prev =
    Math.round((dataNASum.positive / dataNASum.total) * 100 * 100) / 100;
  const dataFinal = data_noNA.concat(dataNASum);

  return dataFinal;
}

export function recode(data, codeArray) {
  var tmp = null;
  var key = null;
  var dataRow = null;
  var dataFinal = [];
  const codeArrayLength = Object.keys(codeArray).length;
  for (let i = 0; i < codeArrayLength; i++) {
    key = Object.keys(codeArray)[i];
    tmp = data.filter((d) => codeArray[key].includes(Object.values(d)[0]));
    dataRow = {
      _row: key,
      positive: getSum(tmp.map((d) => d.positive)),
      total: getSum(tmp.map((d) => d.total)),
    };
    dataRow.uwt_prev =
      Math.round((dataRow.positive / dataRow.total) * 100 * 10) / 10;

    dataFinal.push(dataRow);
  }

  return dataFinal;
}
