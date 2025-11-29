const add = require('../src/add');

test('adds 2 + 2 to equal 4', () => {
  expect(add(2, 2)).toBe(4);
});

test('adds 5 + 5 to equal 10', () => {
  expect(add(5, 5)).toBe(10);
});
