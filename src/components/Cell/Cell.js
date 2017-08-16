import React from 'react';
import PropTypes from 'prop-types';
import s from './Cell.scss';
import store, {isSelected, getCellVal, setSelectedCell} from '../store/store';
import mobxReact from 'mobx-react';


const {observer} = mobxReact;

const Cell = observer(({rowIndex, cellIndex}) => {
  return (
    <td
      onClick={() => setSelectedCell(rowIndex, cellIndex)}
      className={`${s.cell} ${isSelected(rowIndex, cellIndex) ? s.selected : ''}`}
      >{getCellVal(rowIndex, cellIndex)}</td>
  );
});

Cell.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  cellIndex: PropTypes.number.isRequired
};

export default Cell;
