import _ from 'lodash';
import React from 'react';
import s from './App.scss';
import Row from '../Row';
import Header from '../Header';
import FormulaEditor from '../FormulaEditor';
import mobxReact from 'mobx-react';


const {observer} = mobxReact;

const App = observer(() => {
  return (
    <div className={s.root}>
      {/*<FormulaEditor value="4"/>*/}
      <FormulaEditor/>
      <table className={s.table}>
        <tbody>
          <Header/>
          {_.times(10, rowIndex => <Row key={rowIndex} rowIndex={rowIndex}/>)}
        </tbody>
      </table>
    </div>
  );
});

export default App;
