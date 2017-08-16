import mobx from 'mobx';
import mobxReact from 'mobx-react';


const {observable, action, autorun, toJS, computed} = mobx;
const store = observable(
  {
    table: observable.map({}),
    selectedCell: null
  }
)


export const getCellVal = (i, j) => {
  const key = `${i},${j}`;
  return store.table.has(key) ? store.table.get(key).value : '';
}
export const setCellVal = action((val) => {
  store.table.set(store.selectedCell, {value: val, formula: val});
})

//change to computed!???
export const getSelectedCellVal = () => {
  return store.selectedCell === null ? '' : store.table.get(store.selectedCell).formula;
}

export const setSelectedCell = action((i, j) => {
  const key = `${i},${j}`;
  store.selectedCell = key;
  if (!store.table.has(key)) {
    store.table.set(key, {value: '', formula: ''});
  }
})

export function converter(i, j){
  const row = i + 1;
  const col = String.fromCharCode(65 + j);
  return (col + row);
}

//
//
//
//
// const getCellValue = computed(() => {
//   return this.formula;
// })
//
// const addCell = action((i, j, formula) => {
//   const key = `${i},${j}`;
//   selectedCell = key;
//   if (table.has(key)) {
//     return;
//   }
//   table.set(key, {formula, value: getCellValue()})
// })

