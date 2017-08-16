import mobx from 'mobx';
import mobxReact from 'mobx-react';

const {observable, action, autorun, toJS, computed} = mobx;
const store = observable(
  {
    table: observable.map({}),
    selectedCell: null
  }
);


// export const getCellVal = (i, j) => {
//   const key = getKey(i, j);
//   return store.table.has(key) ? store.table.get(key).value : '';
// };
export const setCellVal = action(val => {
  store.table.set(store.selectedCell, {value: val, formula: val});
});

//change to computed!???
export const getSelectedCellVal = () => {
  return store.selectedCell === null ? '' : store.table.get(store.selectedCell).formula;
};

export const setSelectedCell = action((i, j) => {
  const key = getKey(i, j);
  store.selectedCell = key;
  if (!store.table.has(key)) {
    store.table.set(key, {value: '', formula: ''});
  }
});

export function converter(i, j) {
  const row = i + 1;
  const col = String.fromCharCode(65 + j);
  return (col + row);
}
function getKey(i, j) {
  return converter(i, j);
}
export const getCellVal = (i, j) => {
  const key = getKey(i, j);
  return getValByKey(key);
};

function getValByKey(key) {
  if (!store.table.has(key)) {
    return '';
  }
  let formula = store.table.get(key).formula.trim();
  if (formula.length > 0 && formula[0] === '=') {
    formula = formula.substring(1);
    const cells = findCells(formula);
    cells.forEach(cell => {
      const val = getValByKey(cell);
      formula = formula.replace(cell, val);
    });
    return eval(formula);
  }
  else if(store.table.has(key)){
    return store.table.get(key).formula;
  }
  return '';
}

export function isSelected(i, j) {
  const key = getKey(i, j);
  return key === store.selectedCell;
}

export function findCells(str) {
  const cells = str.match(/[a-zA-Z][0-9]/g);
  return cells ? cells : [];
}
