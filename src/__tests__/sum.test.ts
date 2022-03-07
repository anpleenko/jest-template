import { sum } from '../sum';

describe('sum two numbers', () => {
  it('sum should be correct', () => {
    expect(sum(3, 5)).toEqual(8);
    expect(sum(5, 3)).toEqual(8);
  });
});
