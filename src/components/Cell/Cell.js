import React from 'react';
import PropTypes from 'prop-types';
import s from './Cell.scss';
import store, {getCellVal, setSelectedCell} from '../store/store';
import mobxReact from 'mobx-react';


const {observer} = mobxReact;

const Cell = observer(({rowIndex, cellIndex}) => {
  return (
    <td
      onClick={() => setSelectedCell(rowIndex, cellIndex)}
      className={s.cell}
      >{getCellVal(rowIndex, cellIndex)}</td>
  );
});

Cell.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  cellIndex: PropTypes.number.isRequired
};

export default Cell;
