import {expect} from 'chai';
import {converter, findCells} from '../src/components/store/store';
describe('mapping indices and cells', () => {
  it('should covert first cell', () => {
    const i = 0;
    const j = 0;
    const cell = converter(i, j);
    expect(cell).to.equal('A1');
  });
  it('should covert second cell from top', () => {
    const i = 1;
    const j = 0;
    const cell = converter(i, j);
    expect(cell).to.equal('A2');
  });

  it('should covert second cell from left', () => {
    const i = 0;
    const j = 1;
    const cell = converter(i, j);
    expect(cell).to.equal('B1');
  });

});

describe('find all letters', () => {
  it('should return  all cells', () => {
    const str = 'A1 + B7 +7 + c ';
    const indices = findCells(str);
    expect(indices).to.deep.equal(['A1', 'B7']);

  });
})
;

